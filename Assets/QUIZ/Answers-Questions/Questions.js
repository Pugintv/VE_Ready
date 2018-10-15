

var q1 : GameObject;
var q2 : GameObject; // q: question
var q3 : GameObject;
var q4 : GameObject;  // 
var q5 : GameObject;
var q6 : GameObject;
var q7 : GameObject;
var q8 : GameObject;
var q9 : GameObject;
var q10 : GameObject;
var newquestion : GameObject;
/*
var q11 : GameObject;
var q12 : GameObject;
var q13 : GameObject;
var q14 : GameObject;
var q15 : GameObject;
var q16 : GameObject;
var q17 : GameObject;
var q18 : GameObject;
var q19 : GameObject;
var q20 : GameObject; 
*/
var randomQuestion : Array;


function Awake (){

randomQuestion = new Array(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,newquestion); 
// When you add new questions firstly create new variable then add to this line like :" ...,q21)". 


}
function Start(){
var chooserandom = Random.Range(0,(randomQuestion.length));
var position = transform.TransformPoint(Random.Range(-3,-3),1,Random.Range(5,5)); // it will choose random question at this position

Instantiate(randomQuestion[chooserandom],position,Quaternion.identity);

}
