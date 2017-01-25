#pragma strict
var c1: GUITexture;
var c2: GUITexture;
var c3: GUITexture;
var c4: GUITexture;
var c5: GUITexture;
var c6: GUITexture;
var left : GUITexture;
var right : GUITexture;
var skip : GUITexture;

var co4: GameObject;
var co4T: Texture;

var co6: GameObject;
var co6T: Texture;

function Start () {
	c1.active = true;
	c2.active = false;
	c3.active = false;
	c4.active = false;
	c5.active = false;
	c6.active = false;
}

function Update () {
	if (PlayerPrefs.GetInt("lingua") == 1){
		co4.guiTexture.texture = co4T;
		co6.guiTexture.texture = co6T;
	}
	//Gestione touch
	if (menu.attivaTouch){
		if (Input.touchCount == 1)
	    {
	    var touch: Touch = Input.touches[0]; 
	    if(touch.phase == TouchPhase.Began && left.HitTest(touch.position))
	      {
			if(c2.active) {c2.active = false; c1.active = true;}
			if(c3.active) {c3.active = false; c2.active = true;}
			if(c4.active) {c4.active = false; c3.active = true;}
			if(c5.active) {c5.active = false; c4.active = true;}
			if(c6.active) {c6.active = false; c5.active = true;}
			
	      }
	 	else if(touch.phase == TouchPhase.Began && right.HitTest(touch.position))
	     {
	     	if(c6.active) {menu.sottomenu = 3; Application.LoadLevel("lvl1 Loading - Casa Rick");}
	     	if(c5.active) {c5.active = false; c6.active = true;}
	     	if(c4.active) {c4.active = false; c5.active = true;}
	     	if(c3.active) {c3.active = false; c4.active = true;}
	     	if(c2.active) {c2.active = false; c3.active = true;}
	     	if(c1.active) {c1.active = false; c2.active = true;}
	     }
	     else if(touch.phase == TouchPhase.Began && skip.HitTest(touch.position))
	      {
	      	 Application.LoadLevel("lvl1 Loading - Casa Rick");
	      }
		}
	}
	//Gestione tasti PC
	if (menu.attivaTasti){
	if(Input.GetMouseButtonDown(0) && left.HitTest(Input.mousePosition))
      {
		if(c2.active) {c2.active = false; c1.active = true;}
		if(c3.active) {c3.active = false; c2.active = true;}
		if(c4.active) {c4.active = false; c3.active = true;}
		if(c5.active) {c5.active = false; c4.active = true;}
		if(c6.active) {c6.active = false; c5.active = true;}
		
      }
 	else if(Input.GetMouseButtonDown(0) && right.HitTest(Input.mousePosition))
     {
     	if(c6.active) {Application.LoadLevel("lvl1 Loading - Casa Rick");}
     	if(c5.active) {c5.active = false; c6.active = true;}
     	if(c4.active) {c4.active = false; c5.active = true;}
     	if(c3.active) {c3.active = false; c4.active = true;}
     	if(c2.active) {c2.active = false; c3.active = true;}
     	if(c1.active) {c1.active = false; c2.active = true;}
     }
     else if(Input.GetMouseButtonDown(0) && skip.HitTest(Input.mousePosition))
      {
      	Application.LoadLevel("lvl1 Loading - Casa Rick");
      }
     }
}