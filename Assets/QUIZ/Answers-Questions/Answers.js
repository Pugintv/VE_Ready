

var correct = false; 


function OnMouseEnter(){
renderer.material.color = Color.blue;


}
function OnMouseExit(){
renderer.material.color = Color.white;


}


function OnMouseUp(){ // if we clicked to correct answer it will add 5 points and load next level
if( correct==true){
Point.point += 5;
renderer.material.color = Color.green;

Application.LoadLevel(Application.loadedLevel +1);

}
if( correct == false){ // if we clicked to false answer it will load level "defeat"
renderer.material.color = Color.red;
Application.LoadLevel("Defeat");

}
}