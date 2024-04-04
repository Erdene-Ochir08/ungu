// Array/massive -> olon utga zereg hadgalah [5,3,36,..]
var a = 5;
var toonuud = [10,6,36,820];
console.log(toonuud);
// index gedeg n massive-iin utgiin bairshil
// index 0-ees ehelne
console.log(toonuud[0]);
var zevseg = ["selem","buu","num sum","bambai","malgai"];
console.log(zevseg[0]);
console.log(zevseg[zevseg.length-1]);

for(var i=0; i<=zevseg.length-1; i++){
	console.log(zevseg[i]);
}
// i=0 -> 0<=4 ? vnen  zevseg[0] selem i++ i=1
// i=1 -> 1<=4 ? vnen  zevseg[1] buu   i++ i=2
// i=2 -> 2<=4 ? vnen  zevseg[2] num sum i++ i=3
// i=3 
// i=5 -> 5<=4 ? hudlaa kod zogsono
 
// Массив дотор 10 ширхэг дурын тоог хадгалаад зөвхөн тэгш тоонуудыг гаргаж ирнэ үү 
var too = [2,56,3,6,8,10,51,7,9,12];
for(var i=0; i<=too.length-1;i++){
	if(too[i]%2==0){
		console.log("tegsh too: " + too[i]);
	}else{
		console.log("sondgoi too : " + too[i]);
	}
}
// i=0 0<=9 too[0] 2%2=0 
// i=1 1<=9 too[1] 56%2=0 
// i=2 2<=9 too[2] 3%2=1
var body = document.getElementsByTagName('body')[0];
var btn1 = document.getElementsByTagName('button')[1];
var color = ["yellow","blue","green","orange","purple"];
var i=-1;
function ungu(){
	i++;
	if(i>color.length-1){
		i=0;
	}
	body.style.backgroundColor=color[i];
	btn1.innerText = color[i];
	
	// .innerText : tag dotorh text uurchlunu
	// Хэрвээ i 4-өөс их болвол буцаад 0 болж эхнээсээ эхэлнэ
}
function butsah(){
	i--;
	if(i<0){
		i = color.length-1;
	}
	body.style.backgroundColor=color[i];
	btn1.innerText = color[i];
}
var up;
function auto(){
	i++;
	if(i>color.length-1){
		i=0;
	}
	body.style.backgroundColor=color[i];
	btn1.innerText = color[i];
	up = setTimeout(auto,2000);
}
// setTimeout() -> kod-iig automataar ajuulna
// clearTimeout -> zogsoono
function stop(){
	clearTimeout(up);
}