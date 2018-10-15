using UnityEngine;
using System.Collections;

public class Button : MonoBehaviour {

	public void ChangeToScene (string sceneToChangeTo) {
		Application.LoadLevel (sceneToChangeTo);
	}
	
	/*void Update(){
		if (Input.GetKeyDown(KeyCode.Escape))
			Application.LoadLevel ("MainMenu");
	}*/
	
}
