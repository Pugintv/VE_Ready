
 

var skin : GUISkin;
 

function OnGUI () {
 
    GUI.skin = skin;
       
             var click = GUI.Button(Rect(Screen.width/2.8+5, Screen.height/3+25, 435, 35), "Start"); 
            if (click){ 
                
             
                 
                Application.LoadLevel(1); 

    }
}

