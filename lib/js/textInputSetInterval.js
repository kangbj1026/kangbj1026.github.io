// Interval(150);

setTimeout(()=>
{
	start();
}, 5000);

function start()
{
	Interval(150);
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

let num = 1;
let data = setting("환영합니다.");
const imgArr = ["","1","2","3","4","5","6","7","8","9","10"];
const imgTextDiv = ["","첫","두","세","네","다섯","여섯","일곱","여덟","아홉","열"];
const imgContentDiv = ["",
	"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ",
	"bbbbbbbb",
	"cccccccc",
	"dddddddddddddddddddd",
	"eeeeeeeeeeeee ",
	"ffffffffffff",
	"ggg",
	"hhhhhhhh",
	"iiiii",
	"jjjjjjjjjjjj"
];
const imgDiv = $(".imgDiv");

function typi()
{
	if (imgDiv.children().length === 10)
	{
		setTimeout(()=>
		{
			// imgDiv.empty();

		}, 5000);
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
				let time = 3000;
				switch (num) {
				case 2:
					time = 2000;
					break;
				case 3:
					time = 2000;
					break;
				case 6:
					time = 3000;
					break;
				default:
					break;
				}

				if (num === 10)
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
					else
					{
						imgStart();
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

function imgStart()
{
	imgDiv[0].setAttribute("style", "animation: backInUp 5s;");
	
	const firstImg = document.getElementsByClassName("first_img")[0];
	firstImg.setAttribute("style", "display: block");
}

function imgAdd(imgName)
{
	const randomNum = Math.floor(Math.random() * 10 + 1);
	const animationArr = ["backInDown","fadeInBottomRight","fadeInDownBig","flipInX","lightSpeedInLeft","rotateInDownRight","rollIn","zoomInUp","bounceInRight","fadeInTopLeft"];
	const div = document.createElement("div");
	div.setAttribute("style", "animation : "+animationArr[randomNum]+" 5s; display: flex; align-items : center; padding: 20px 0 20px 0");
	const img = document.createElement("img");
	img.src = "lib/img/"+imgName+".png";
	div.appendChild(img);
	imgDiv[0].appendChild(div);
}