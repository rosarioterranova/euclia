var ita : GUITexture;
var eng : GUITexture;

function Update () {
	//Gestione touch
		if (Input.touchCount == 1)
		    {
		    var touch: Touch = Input.touches[0]; 
		    if(touch.phase == TouchPhase.Began && ita.HitTest(touch.position))
		      {
		      	PlayerPrefs.SetInt("lingua", 0); //0 = ita; 1 = eng;
				Application.LoadLevel("inputMode");
		      }
		    if(touch.phase == TouchPhase.Began && eng.HitTest(touch.position))
		      {
		      	PlayerPrefs.SetInt("lingua", 1); //0 = ita; 1 = eng;
				Application.LoadLevel("inputMode");
		      }
	}
	//Gestione tasti PC
		    if(Input.GetMouseButtonDown(0) && ita.HitTest(Input.mousePosition))
		      {
		      	PlayerPrefs.SetInt("lingua", 0); //0 = ita; 1 = eng;
				Application.LoadLevel("inputMode");
		      }
		    if(Input.GetMouseButtonDown(0) && eng.HitTest(Input.mousePosition))
		      {
		      	PlayerPrefs.SetInt("lingua", 1); //0 = ita; 1 = eng;
				Application.LoadLevel("inputMode");
		      }
}