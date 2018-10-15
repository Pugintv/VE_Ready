

function OnMouseEnter(){
renderer.material.color = Color.blue;


}
function OnMouseExit(){
renderer.material.color = Color.white;


}


function OnMouseUp(){
Point.point = 0 ;
Application.LoadLevel(0);
}