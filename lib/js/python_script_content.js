export const PYTHON_SCRIPT = `import re
import json

def extract_with_regex(html_content):
    topics = []
    # topic-card 단위로 분할
    cards = re.split(r'<div class="topic-card"', html_content)[1:]
    
    cat_id = 1
    orders = {1:0, 2:0, 3:0, 4:0, 5:0}
    
    for card in cards:
        # scroll_id 추출
        sid_match = re.search(r'id="(s\\d+)"', card)
        if not sid_match: continue
        scroll_id = sid_match.group(1)
        
        # 카테고리 판별 (s1~s6:1, s7~s13:2, s14~s24:3, s25~28&37:4, rest:5)
        sid_num = int(scroll_id[1:])
        if sid_num <= 6: cat_id = 1
        elif sid_num <= 13: cat_id = 2
        elif sid_num <= 24: cat_id = 3
        elif (25 <= sid_num <= 28) or sid_num == 37: cat_id = 4
        else: cat_id = 5
        
        orders[cat_id] += 1
        
        # 제목 추출
        title_match = re.search(r'<span class="topic-title">.*?([가-힣\\w].*?)</span>', card, re.S)
        title = title_match.group(1).strip() if title_match else ""
        title = re.sub(r'^[①-⑳\\d\\.]+\\s*', '', title)
        title = re.sub(r'<.*?>', '', title)
        
        # 키워드
        kw_match = re.search(r'data-title="(.*?)"', card)
        keywords = kw_match.group(1) if kw_match else ""
        
        # --- 비전공자 데이터 ---
        ana_title = re.search(r'<div class="analogy-label">(.*?)</div>', card)
        ana_text = re.search(r'<div class="analogy-text">(.*?)</div>', card, re.S)
        
        points = []
        # 비전공자 포인트 추출 (정규식 개선)
        point_matches = re.finditer(r'<div class="simple-point">.*?<span class="emoji">(.*?)</span>.*?<b>(.*?)</b> — (.*?)</span>', card, re.S)
        for pm in point_matches:
            points.append({
                "emoji": pm.group(1).strip(), 
                "bold": pm.group(2).strip(), 
                "text": re.sub(r'<.*?>', '', pm.group(3)).strip()
            })
            
        # --- 전공자 데이터 ---
        desc = re.search(r'<p class="topic-desc">(.*?)</p>', card, re.S)
        code_h = re.search(r'<span class="code-lang">(.*?)</span>', card)
        code_c = re.search(r'<pre>(.*?)</pre>', card, re.S)
        
        # 테이블 추출
        table_obj = None
        table_match = re.search(r'<table>(.*?)</table>', card, re.S)
        if table_match:
            rows = re.findall(r'<tr>(.*?)</tr>', table_match.group(1), re.S)
            if rows:
                headers = [re.sub(r'<.*?>', '', h).strip() for h in re.findall(r'<th>(.*?)</th>', rows[0], re.S)]
                data_rows = []
                for r in rows[1:]:
                    cells = [re.sub(r'<.*?>', '', c).strip() for c in re.findall(r'<td>(.*?)</td>', r, re.S)]
                    data_rows.append(cells)
                table_obj = {"headers": headers, "rows": data_rows}
        
        key_points = []
        kp_matches = re.finditer(r'<div class="key-point">(.*?)</div>', card, re.S)
        for kpm in kp_matches:
            kp_text = re.sub(r'<.*?>', '', kpm.group(1)).strip()
            if kp_text: key_points.append(kp_text)
            
        topics.append({
            "category_id": cat_id,
            "scroll_id": scroll_id,
            "title": title,
            "search_keywords": keywords,
            "non_analogy_title": ana_title.group(1).strip() if ana_title else None,
            "non_analogy_text": re.sub(r'<.*?>', '', ana_text.group(1)).strip() if ana_text else None,
            "non_points": json.dumps(points, ensure_ascii=False),
            "major_desc": re.sub(r'<.*?>', '', desc.group(1)).strip() if desc else None,
            "major_code_header": code_h.group(1).strip() if code_h else None,
            "major_code_content": re.sub(r'<.*?>', '', code_c.group(1)).strip() if code_c else None,
            "major_table": json.dumps(table_obj, ensure_ascii=False) if table_obj else None,
            "major_key_points": json.dumps(key_points, ensure_ascii=False) if key_points else None,
            "display_order": orders[cat_id]
        })
    return topics

def escape_sql(value):
    if value is None:
        return "NULL"
    # 1. 역슬래시 이스케이프 (\ -> \\)
    # 2. 작은따옴표 이스케이프 (' -> '')
    escaped = str(value).replace('\\\\', '\\\\\\\\').replace("'", "''")
    return f"'{escaped}'"

# 실행
try:
    with open('java_spring_study_guide.html', 'r', encoding='utf-8') as f:
        html = f.read()

    topics = extract_with_regex(html)

    with open('sql.md', 'w', encoding='utf-8') as f:
        f.write("# ☕ Java & Spring 학습 가이드 데이터 삽입 SQL (Fixed)\\n\\n")
        f.write("\`\`\`sql\\n")
        
        # 1. 카테고리 데이터 삽입
        f.write("-- 1. 카테고리 데이터 삽입\\n")
        f.write("INSERT INTO study_category (id, name, icon, badge_color, dot_color, display_order) VALUES\\n")
        f.write("(1, 'Java Core', '☕', 'bg-orange', 'java', 1),\\n")
        f.write("(2, 'Spring', '🍃', 'bg-green', 'spring', 2),\\n")
        f.write("(3, 'JPA / DB', '🗃', 'bg-blue', 'db', 3),\\n")
        f.write("(4, 'REST / HTTP', '🌐', 'bg-purple', 'rest', 4),\\n")
        f.write("(5, 'DevOps / 운영', '🛠', 'bg-red', 'devops', 5)\\n")
        f.write("ON DUPLICATE KEY UPDATE name=VALUES(name), icon=VALUES(icon);\\n\\n")

        # 2. 토픽 데이터 삽입
        f.write("-- 2. 토픽 데이터 삽입\\n")
        f.write("INSERT INTO study_topic \\n(category_id, scroll_id, title, search_keywords, non_analogy_title, non_analogy_text, non_points, major_desc, major_code_header, major_code_content, major_table, major_key_points, display_order)\\nVALUES\\n")
        
        for i, t in enumerate(topics):
            vals = []
            for key in ['category_id', 'scroll_id', 'title', 'search_keywords', 'non_analogy_title', 'non_analogy_text', 'non_points', 'major_desc', 'major_code_header', 'major_code_content', 'major_table', 'major_key_points', 'display_order']:
                val = t[key]
                if val is None or val == "null":
                    vals.append("NULL")
                elif isinstance(val, int):
                    vals.append(str(val))
                else:
                    # CRITICAL: MySQL JSON 컬럼 이스케이프 처리
                    # 1. 역슬래시 자체를 먼저 이스케이프 (\\\\)
                    # 2. 홑따옴표 이스케이프 (' -> '')
                    escaped = val.replace('\\\\', '\\\\\\\\').replace("'", "''")
                    vals.append(f"'{escaped}'")
            
            line = "(" + ", ".join(vals) + ")"
            f.write(line + ("," if i < len(topics) - 1 else ";") + "\\n")
        
        f.write("\`\`\`\\n")

    print(f"Successfully fixed and extracted {len(topics)} topics to sql.md")

except Exception as e:
    print(f"Error: {e}")
`;
