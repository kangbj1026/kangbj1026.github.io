// https://westzero.tistory.com/112
String.prototype.toKorChars = function() { 
	let cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
	cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
	cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
	
	let str = this, 
		cnt = str.length, 
		chars = [], 
		cCode; 
	for (let i = 0; i < cnt; i++) 
	{ 
		cCode = str.charCodeAt(i); 
		if (cCode == 32) { 
			chars.push(" ");
			continue;
	} 
	// 한글이 아닌 경우 
	if (cCode < 0xAC00 || cCode > 0xD7A3) 
	{ 
		chars.push(str.charAt(i)); continue; 
	} 
	cCode = str.charCodeAt(i) - 0xAC00; 

	jong = cCode % 28; // 종성 
	jung = ((cCode - jong) / 28 ) % 21 // 중성 
	cho = (((cCode - jong) / 28 ) - jung ) / 21 // 초성 

	//  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
	chars.push(cCho[cho]);
	chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
	if (cJong[jong] !== '') 
	{ 
		chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
	}
			
	}
	return chars; 
}


//타이핑할 문장
let result  = "abcsf.";
let typeing1=[];
result = result.split(''); // 한글자씩자름

//각글자 초성,중성,종성으로 나눔
for (let i =0; i<result.length; i++)
{
	typeing1[i] = result[i].toKorChars();
}

//출력할 엘리먼트요소 가져옴 
let resultDiv = document.getElementsByClassName("result")[0];

let text = "";
let i=0; 
let j=0; 

//총글자수
let imax = typeing1.length;

//setInterval을 이용해 반복적으로 출력 
let inter = setInterval(typi,150);

let imgInter = setInterval(imgStart,1000);

let imgAddInter = setInterval(imgAdd,3000);

function typi()
{
	//글자수만큼 반복후 종료 
	if(i<=imax-1)
	{
		//각 글자가 초성 중성 종성 순서대로 추가되도록 
		let jmax = typeing1[i].length;
		resultDiv.innerHTML = text + typeing1[i][j];
		j++;
		if(j==jmax)
		{
			text+=typeing1[i][j-1];
			
			if (text.includes("."))
			{
				imgInter;
			}
			//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
			i++;
			j=0;
		}
	}
	else
	{
		clearInterval(inter);
	}
}

const imgDiv = document.getElementsByClassName("imgDiv")[0];
const imgName = "smile";

function imgStart()
{
	imgDiv.setAttribute("style", "-webkit-animation: fadein 10s;");
	
	const firstImg = document.getElementsByClassName("first_img")[0];
	firstImg.setAttribute("style", "display: block");
	const timeOut = 5;
	for (let i = 0; i < timeOut; i++) 
	{
		imgAddInter;
	}

	clearInterval(imgInter);
}

function imgAdd()
{
	const div = document.createElement("div");
	div.setAttribute("style", "-webkit-animation: fadein 10s;");
	const img = document.createElement("img");
	img.src = "lib/img/"+imgName+".png";

	div.appendChild(img);
	imgDiv.appendChild(div);
}