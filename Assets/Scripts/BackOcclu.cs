using UnityEngine;
using System.Collections;

public class BackOcclu : MonoBehaviour {
		
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.Escape))
			Application.LoadLevel ("Menu 3D");
	}
}
