// Interval(150);

setTimeout(()=>
{
	start();
}, 5000);

function start()
{
	Interval(100);
}
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
function textInter(text)
{
	let result  = text;
	let typeing = [];
	result = result.split(''); // 한글자씩자름

	//각글자 초성,중성,종성으로 나눔
	for (let i =0; i<result.length; i++)
	{
		typeing[i] = result[i].toKorChars();
	}
	return typeing;
}

function setting(input)
{
	const settArr = [];
	const typeing = textInter(input);

	//총글자수
	let imax = typeing.length;

	//setInterval을 이용해 반복적으로 출력 

	let text = "";
	let i = 0; 
	let j = 0; 

	settArr.push(typeing);
	settArr.push(imax);
	settArr.push(text);
	settArr.push(i);
	settArr.push(j);

	return settArr;
}

function Interval(num)
{
	return setInterval(typi,num);
}

const remainTime = document.querySelector("#remain-time");
const toDay = document.querySelector("#toDay");

function diffDay() {
    const masTime = new Date("2018-10-13");
    const todayTime = new Date();
    
    const diff = todayTime - masTime;
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

	toDay.innerHTML = `${diffDay}일`;
    remainTime.innerText = ` ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
	
	return diffDay;
}

setInterval(diffDay, 1000);

let num = 1;
let mainText = "환영해 ! <br> 우리가 만난지도 벌써 " + diffDay() + "일이 되었네 ! <br> 그동안 나 만나준다고 정말 고생많았오! <br> ";
mainText += "금래 덕분에 내가 많은 경험을 하고 배운것도 많아서 성장한 느낌(??)이 들때가 많아 ㅋㅋ <br>";
mainText += "금래도 내 덕분에 뭔가 달라진게 있지 않아? 없나 ㅠㅠ 있으면 좋겠네 ㅋㅋㅋ <br>";
mainText += "우리가 함께 살면서 잘 사는게 가장 중요하다고 생각해 ㅋㅋ 내 기준에 잘사는건 서로 사이가 좋다는거야 ㅋㅋ <br>";
mainText += "우리가 힘들때 서로를 흉보고 비판만 하면 사이가 좋아지지 않을꺼야 ! 그러지 않게 그때 마다 금래 곁에서 항상 샌드백이 되서 두들겨 맞아줄께 ㅋㅋㅋ <br>";
mainText += "난 금래한테 하고 싶은 말이 아주 많은데 적당히 쓰고 마무리 해야겠다 ㅋㅋ 부끄럽다 ㅋㅋ 내가 글을 잘 못써도 이해해 줄꺼지? ㅋㅋ 마음이 중요한거 알지? 헿 <br>";
mainText += "나의 프로포즈를 받아줄래? 대답해줘 ! 사랑해~ ♥ .";

let data = setting(mainText);
const imgArr = ["","","b","c","d","e","f","g","h","i"];
const imgTextDiv = ["","첫","두","세","네","다섯","여섯","일곱","여덟","아홉"];
const imgContentDiv = ["",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
];
const imgDiv = $(".imgDiv");

function typi()
{
	if (imgDiv.children().length === 9)
	{
		setTimeout(()=>
		{
			const last = document.querySelector(".start");
			last.innerHTML = `♡ 금래를 제일 많이 많이 사랑해!!! ♡`;
			last.setAttribute("style", "font-size: 80px;");
			setTimeout(()=>
			{
				location.reload();
				// imgDiv.empty();
			}, 10000);
		}, 10000);
	}

	let input = "";
	//출력할 엘리먼트요소 가져옴 
	let resultDiv = $(".result")[0];
	
	//글자수만큼 반복후 종료 
	if(data[3]<=data[1]-1)
	{
		//각 글자가 초성 중성 종성 순서대로 추가되도록 
		let jmax = data[0][data[3]].length;
		resultDiv.innerHTML = data[2] + data[0][data[3]][data[4]];
		data[4]++;
		if(data[4]==jmax)
		{
			data[2] += data[0][data[3]][data[4]-1];
			if (data[2].includes("."))
			{
				let time = 5000;
				switch (num) {
				case 2:
					time = 4000;
					break;
				case 3:
					time = 4000;
					break;
				case 6:
					time = 5000;
					break;
				default:
					break;
				}

				if (num === 9)
				{
					input = "마지막 사진";
				}
				else
				{
					input = imgTextDiv[num] + "번째 사진" + imgContentDiv[num] + ".";
				}

				setTimeout(function() {
					if (num !== 1)
					{
						let iname = "";
						iname = imgArr[num];
						imgAdd(iname);
					}

					resultDiv.innerHTML = "";
					data = setting(input);
					imax = data[0].length;
					Interval(1500);
					num++;
				}, time);
			}

			//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
			data[3]++;
			data[4]=0;
		}
	}
	else
	{
		clearInterval(Interval());
	}
}

function imgAdd(imgName)
{
	const randomNum = Math.floor(Math.random() * 9 + 1);
	const animationArr = ["backInDown","fadeInBottomRight","fadeInDownBig","flipInX","lightSpeedInLeft","rotateInDownRight","rollIn","zoomInUp","bounceInRight","fadeInTopLeft"];
	const div = document.createElement("div");
	div.setAttribute("style", "animation : "+animationArr[randomNum]+" 5s; display: flex; align-items : center; padding: 20px 0 20px 0; border-radius: 50px;");
	const img = document.createElement("img");
	img.src = "lib/img/"+imgName+".png";
	div.appendChild(img);
	imgDiv[0].appendChild(div);
}