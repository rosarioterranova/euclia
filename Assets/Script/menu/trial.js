#pragma strict
var compra : GUITexture; 
var menu : GUITexture;

var compra1: GameObject;
var compra1T: Texture;

var thanks: GameObject;
var thanksT: Texture;

function Update () {
	if (PlayerPrefs.GetInt("lingua") == 1){
		compra1.guiTexture.texture = compra1T;
		thanks.guiTexture.texture = thanksT;
	}

	if (Input.touchCount == 1)
		    {
		    var touch: Touch = Input.touches[0]; 
				if(touch.phase == TouchPhase.Began && compra.HitTest(touch.position))
					{
				      	Application.OpenURL("http://www.windowsphone.com/it-it/search?q=euclia");
				    }
				else if(touch.phase == TouchPhase.Began && menu.HitTest(touch.position))
					{
				      	Application.LoadLevel("menu");
				    }
			}
			
	if(Input.GetMouseButtonDown(0) && compra.HitTest(Input.mousePosition))
	{
		Application.OpenURL("http://www.windowsphone.com/it-it/search?q=euclia");
	}
	if(Input.GetMouseButtonDown(0) && menu.HitTest(Input.mousePosition))
	{
		Application.LoadLevel("menu");
	}
}