var toucha : GUITexture;
var keyboard : GUITexture;

var touchI: GameObject;
var touchIT: Texture;

var keyboardI: GameObject;
var keyboardIT: Texture;

function Update () {

	if (PlayerPrefs.GetInt("lingua") == 1){
		touchI.guiTexture.texture = touchIT;
		keyboardI.guiTexture.texture = keyboardIT;
	}

	//Gestione touch
		if (Input.touchCount == 1)
		    {
		    var touch: Touch = Input.touches[0]; 
		    if(touch.phase == TouchPhase.Began && toucha.HitTest(touch.position))
		      {
		      	PlayerPrefs.SetInt("attivaTouch", 1);
   				PlayerPrefs.SetInt("attivaTasti", 0);
				Application.LoadLevel("menu");
		      }
		    if(touch.phase == TouchPhase.Began && keyboard.HitTest(touch.position))
		      {
		      	PlayerPrefs.SetInt("attivaTouch", 0);
   				PlayerPrefs.SetInt("attivaTasti", 1);
				Application.LoadLevel("menu");
		      }
		    } 
	//Gestione tasti PC
		    if(Input.GetMouseButtonDown(0) && toucha.HitTest(Input.mousePosition))
		      {
		      	PlayerPrefs.SetInt("attivaTouch", 1);
   				PlayerPrefs.SetInt("attivaTasti", 0);
				Application.LoadLevel("menu");
		      }
		    if(Input.GetMouseButtonDown(0) && keyboard.HitTest(Input.mousePosition))
		      {
		      	PlayerPrefs.SetInt("attivaTouch", 0);
   				PlayerPrefs.SetInt("attivaTasti", 1);
				Application.LoadLevel("menu");
		      }
}