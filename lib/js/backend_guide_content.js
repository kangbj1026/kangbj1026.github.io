export const BACKEND_GUIDE = `# ☕ Study Guide Backend Implementation Guide

이 문서는 학습 가이드 API 기능을 구현하기 위한 핵심 백엔드 코드 모음입니다.

### ### src/main/java/com/sb_template/domain/studyguide/entity/StudyCategory.java
\`\`\`java
package com.sb_template.domain.studyguide.entity;

import com.sb_template.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

/**
 * 학습 가이드 카테고리 엔티티
 */
@Entity
@Table(name = "study_category")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class StudyCategory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(length = 10)
    private String icon;

    @Column(name = "badge_color", length = 20)
    private String badgeColor;

    @Column(name = "dot_color", length = 20)
    private String dotColor;

    @Column(name = "display_order")
    private Integer displayOrder;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("displayOrder ASC")
    @Builder.Default
    private List<StudyTopic> topics = new ArrayList<>();
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/entity/StudyTopic.java
\`\`\`java
package com.sb_template.domain.studyguide.entity;

import com.sb_template.common.entity.BaseEntity;
import com.sb_template.common.util.StringListConverter;
import com.sb_template.common.util.StringMapConverter;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.Map;

/**
 * 학습 가이드 주제 상세 엔티티
 */
@Entity
@Table(name = "study_topic")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class StudyTopic extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private StudyCategory category;

    @Column(name = "scroll_id", nullable = false, length = 10)
    private String scrollId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(name = "search_keywords", length = 255)
    private String searchKeywords;

    // 비전공자용 데이터
    @Column(name = "non_analogy_title", length = 255)
    private String nonAnalogyTitle;

    @Column(name = "non_analogy_text", columnDefinition = "TEXT")
    private String nonAnalogyText;

    @Convert(converter = StringListConverter.class)
    @Column(name = "non_points", columnDefinition = "JSON")
    private List<Map<String, String>> nonPoints;

    // 전공자용 데이터
    @Column(name = "major_desc", columnDefinition = "TEXT")
    private String majorDesc;

    @Column(name = "major_code_header", length = 255)
    private String majorCodeHeader;

    @Column(name = "major_code_content", columnDefinition = "TEXT")
    private String majorCodeContent;

    @Convert(converter = StringMapConverter.class)
    @Column(name = "major_table", columnDefinition = "JSON")
    private Map<String, Object> majorTable;

    @Convert(converter = StringListConverter.class)
    @Column(name = "major_key_points", columnDefinition = "JSON")
    private List<String> majorKeyPoints;

    @Column(name = "display_order")
    private Integer displayOrder;
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/dto/StudyGuideResponse.java
\`\`\`java
package com.sb_template.domain.studyguide.dto;

import lombok.*;

import java.util.List;

/**
 * 학습 가이드 응답 DTO (계층형 구조)
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyGuideResponse {
    private Long id;
    private String name;
    private String icon;
    private String badgeColor;
    private String dotColor;
    private List<StudyTopicDTO> topics;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class StudyTopicDTO {
        private String scrollId;
        private String title;
        private String searchKeywords;
        private String nonAnalogyTitle;
        private String nonAnalogyText;
        private List<Map<String, String>> nonPoints;
        private String majorDesc;
        private String majorCodeHeader;
        private String majorCodeContent;
        private Map<String, Object> majorTable;
        private List<String> majorKeyPoints;
    }
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/repository/StudyCategoryRepository.java
\`\`\`java
package com.sb_template.domain.studyguide.repository;

import com.sb_template.domain.studyguide.entity.StudyCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 학습 가이드 카테고리 리포지토리
 */
@Repository
public interface StudyCategoryRepository extends JpaRepository<StudyCategory, Long> {

    /**
     * N+1 문제 방지를 위해 Fetch Join을 사용하여 카테고리와 주제를 한 번에 조회
     */
    @Query("SELECT DISTINCT c FROM StudyCategory c " +
           "LEFT JOIN FETCH c.topics t " +
           "ORDER BY c.displayOrder ASC, t.displayOrder ASC")
    List<StudyCategory> findAllWithTopicsOrderByDisplayOrderAsc();
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/repository/StudyTopicRepository.java
\`\`\`java
package com.sb_template.domain.studyguide.repository;

import com.sb_template.domain.studyguide.entity.StudyTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 학습 가이드 주제 리포지토리
 */
@Repository
public interface StudyTopicRepository extends JpaRepository<StudyTopic, Long> {
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/service/StudyGuideService.java
\`\`\`java
package com.sb_template.domain.studyguide.service;

import com.sb_template.domain.studyguide.dto.StudyGuideResponse;
import com.sb_template.domain.studyguide.entity.StudyCategory;
import com.sb_template.domain.studyguide.entity.StudyTopic;
import com.sb_template.domain.studyguide.repository.StudyCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 학습 가이드 서비스
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StudyGuideService {

    private final StudyCategoryRepository studyCategoryRepository;

    /**
     * 모든 학습 가이드 데이터를 계층 구조로 조회
     */
    public List<StudyGuideResponse> getStudyGuide() {
        List<StudyCategory> categories = studyCategoryRepository.findAllWithTopicsOrderByDisplayOrderAsc();

        return categories.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    private StudyGuideResponse convertToResponse(StudyCategory category) {
        return StudyGuideResponse.builder()
                .id(category.getId())
                .name(category.getName())
                .icon(category.getIcon())
                .badgeColor(category.getBadgeColor())
                .dotColor(category.getDotColor())
                .topics(category.getTopics().stream()
                        .map(this::convertToTopicDTO)
                        .collect(Collectors.toList()))
                .build();
    }

    private StudyGuideResponse.StudyTopicDTO convertToTopicDTO(StudyTopic topic) {
        return StudyGuideResponse.StudyTopicDTO.builder()
                .scrollId(topic.getScrollId())
                .title(topic.getTitle())
                .searchKeywords(topic.getSearchKeywords())
                .nonAnalogyTitle(topic.getNonAnalogyTitle())
                .nonAnalogyText(topic.getNonAnalogyText())
                .nonPoints(topic.getNonPoints())
                .majorDesc(topic.getMajorDesc())
                .majorCodeHeader(topic.getMajorCodeHeader())
                .majorCodeContent(topic.getMajorCodeContent())
                .majorTable(topic.getMajorTable())
                .majorKeyPoints(topic.getMajorKeyPoints())
                .build();
    }
}
\`\`\`

### ### src/main/java/com/sb_template/domain/studyguide/controller/StudyGuideController.java
\`\`\`java
package com.sb_template.domain.studyguide.controller;

import com.sb_template.domain.studyguide.dto.StudyGuideResponse;
import com.sb_template.domain.studyguide.service.StudyGuideService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 학습 가이드 컨트롤러
 */
@Tag(name = "Study Guide", description = "학습 가이드 API")
@RestController
@RequestMapping("/api/v1/study-guide")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class StudyGuideController {

    private final StudyGuideService studyGuideService;

    /**
     * 학습 가이드 전체 데이터 조회
     */
    @Operation(summary = "학습 가이드 전체 조회", description = "모든 카테고리와 주제 목록을 계층 구조로 반환합니다.")
    @GetMapping
    public ResponseEntity<List<StudyGuideResponse>> getStudyGuide() {
        return ResponseEntity.ok(studyGuideService.getStudyGuide());
    }
}
\`\`\`

### ### src/main/java/com/sb_template/common/util/StringMapConverter.java
\`\`\`java
package com.sb_template.common.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sb_template.common.constant.ErrorCode;
import com.sb_template.common.exception.BusinessException;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.io.IOException;
import java.util.Map;

/**
 * StringMapConverter 클래스
 * JPA의 AttributeConverter를 구현하여
 * 엔티티에서 사용하는 Map<String, Object> 데이터를
 * 데이터베이스에 문자열( JSON ) 형태로 저장하고
 * 다시 조회 시 Map으로 복원하는 역할을 담당
 */
@Converter
public class StringMapConverter implements AttributeConverter<Map, String>
{
	private final ObjectMapper mapper = new ObjectMapper()
			.configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false)
			.configure(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES, false);
	
	/**
	 * 엔티티의 Map 데이터를 DB 저장용 문자열( JSON )로 변환
	 * - 입력값이 null이면 null 반환
	 */
	@Override
	public String convertToDatabaseColumn(Map attribute)
	{
		if (attribute == null)
		{
			return null;
		}
		
		try
		{
			return mapper.writeValueAsString(attribute);
		}
		catch (JsonProcessingException e)
		{
			throw new BusinessException(ErrorCode.UNABLE_TO_CONVERT_LIST_TO_STRING);
		}
	}
	
	/**
	 * DB에 저장된 JSON 문자열을 Map 형태로 변환
	 * - 입력 문자열이 null 또는 빈 문자열이면 null 반환
	 */
	@Override
	public Map convertToEntityAttribute(String dbData)
	{
		if (dbData == null || dbData.isEmpty())
		{
			return null;
		}
		
		try
		{
			return mapper.readValue(dbData, Map.class);
		}
		catch (IOException e)
		{
			throw new BusinessException(ErrorCode.UNABLE_TO_CONVERT_STRING_TO_LIST);
		}
	}
}
\`\`\`
`;
