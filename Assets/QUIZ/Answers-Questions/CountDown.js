var seconds = 10;
private var Text : TextMesh;

function Start (){
Text = GameObject.Find("Timer").GetComponent(TextMesh);
Text.text = seconds.ToString();
InvokeRepeating("Countdown",1.0,1.0);

}

function Countdown(){
if(-- seconds == 0) CancelInvoke("Countdown");
Text.text = seconds.ToString();

}
function Update(){
if(seconds <= 0){

Application.LoadLevel("Defeat");
}
}