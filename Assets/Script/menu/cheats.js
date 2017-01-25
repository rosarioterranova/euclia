#pragma strict
var back : GUITexture;
var text: GUIText;
var B0: GUITexture;
var B1: GUITexture;
var B2: GUITexture;
var B3: GUITexture;
var B4: GUITexture;
var B5: GUITexture;
var B6: GUITexture;
var B7: GUITexture;
var B8: GUITexture;
var B9: GUITexture;
var C: GUITexture;
var OK: GUITexture;

var scritt: GameObject;
var scrittT: Texture;


function Start () {
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)) Application.LoadLevel("menu");

	if (PlayerPrefs.GetInt("lingua") == 1){
		scritt.guiTexture.texture = scrittT;
	}
	//Gestione touch
	if (menu.attivaTouch){
		if (Input.touchCount == 1)
	    {
	    var touch: Touch = Input.touches[0]; 
	    if(touch.phase == TouchPhase.Began && B0.HitTest(touch.position))
	      {
			text.text=text.text+"0";
	      }
	    else if(touch.phase == TouchPhase.Began && B1.HitTest(touch.position))
	      {
			text.text=text.text+"1";
	      } 
	       else if(touch.phase == TouchPhase.Began && B2.HitTest(touch.position))
	      {
			text.text=text.text+"2";
	      } 
	       else if(touch.phase == TouchPhase.Began && B3.HitTest(touch.position))
	      {
			text.text=text.text+"3";
	      } 
	       else if(touch.phase == TouchPhase.Began && B4.HitTest(touch.position))
	      {
			text.text=text.text+"4";
	      } 
	       else if(touch.phase == TouchPhase.Began && B5.HitTest(touch.position))
	      {
			text.text=text.text+"5";
	      } 
	       else if(touch.phase == TouchPhase.Began && B6.HitTest(touch.position))
	      {
			text.text=text.text+"6";
	      } 
	       else if(touch.phase == TouchPhase.Began && B7.HitTest(touch.position))
	      {
			text.text=text.text+"7";
	      } 
	       else if(touch.phase == TouchPhase.Began && B8.HitTest(touch.position))
	      {
			text.text=text.text+"8";
	      } 
	       else if(touch.phase == TouchPhase.Began && B9.HitTest(touch.position))
	      {
			text.text=text.text+"9";
	      } 
	       else if(touch.phase == TouchPhase.Began && C.HitTest(touch.position))
	      {
			text.text="";
	      } 
	      else if(touch.phase == TouchPhase.Began && back.HitTest(touch.position))
	      {
			Application.LoadLevel("menu");
	      }
	       else if(touch.phase == TouchPhase.Began && OK.HitTest(touch.position))
	      {
			switch(text.text){
				case "095213": PlayerPrefs.SetInt("lvl", 20); GameObject.Find("tada").audio.Play(); break; //sblocca tutti i livelli di gioco
				case "95040": PlayerPrefs.SetInt("bullet", 999); GameObject.Find("tada").audio.Play(); break; ///999 munizioni
				case "99326": PlayerPrefs.SetInt("coin", 999); GameObject.Find("tada").audio.Play(); break; ///999 coin
				case "35852": PlayerPrefs.SetInt("lvl", 5); GameObject.Find("tada").audio.Play(); break; ///sblocca egitto
				case "11354": PlayerPrefs.SetInt("lvl", 10); GameObject.Find("tada").audio.Play(); break; ///sblocca spazio
				case "20203": PlayerPrefs.SetInt("lvl", 15); GameObject.Find("tada").audio.Play(); break; ///sblocca medioevo
				case "26266": 	PlayerPrefs.SetInt("gemma1lvl2", 1);
							    PlayerPrefs.SetInt("gemma2lvl2", 1);
							    PlayerPrefs.SetInt("gemma3lvl2", 1);
							    PlayerPrefs.SetInt("gemma4lvl2", 1);
							    PlayerPrefs.SetInt("gemma5lvl2", 1);
							    PlayerPrefs.SetInt("gemma6lvl2", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme egitto
				case "25256": 	PlayerPrefs.SetInt("gemma1lvl3", 1);
							    PlayerPrefs.SetInt("gemma2lvl3", 1);
							    PlayerPrefs.SetInt("gemma3lvl3", 1);
							    PlayerPrefs.SetInt("gemma4lvl3", 1);
							    PlayerPrefs.SetInt("gemma5lvl3", 1);
							    PlayerPrefs.SetInt("gemma6lvl3", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme spazio
				case "21206": 	PlayerPrefs.SetInt("gemma1lvl4", 1);
							    PlayerPrefs.SetInt("gemma2lvl4", 1);
							    PlayerPrefs.SetInt("gemma3lvl4", 1);
							    PlayerPrefs.SetInt("gemma4lvl4", 1);
							    PlayerPrefs.SetInt("gemma5lvl4", 1);
							    PlayerPrefs.SetInt("gemma6lvl4", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme medioevo
				default: GameObject.Find("error").audio.Play();
			}
	      } 
	    }
    }
    
    //Gestione tasti PC
	if (menu.attivaTasti){
     if(Input.GetMouseButtonDown(0) && B0.HitTest(Input.mousePosition))
      {
		text.text=text.text+"0";
      }
    else if(Input.GetMouseButtonDown(0) && B1.HitTest(Input.mousePosition))
      {
		text.text=text.text+"1";
      } 
       else if(Input.GetMouseButtonDown(0) && B2.HitTest(Input.mousePosition))
      {
		text.text=text.text+"2";
      } 
       else if(Input.GetMouseButtonDown(0) && B3.HitTest(Input.mousePosition))
      {
		text.text=text.text+"3";
      } 
       else if(Input.GetMouseButtonDown(0) && B4.HitTest(Input.mousePosition))
      {
		text.text=text.text+"4";
      } 
       else if(Input.GetMouseButtonDown(0) && B5.HitTest(Input.mousePosition))
      {
		text.text=text.text+"5";
      } 
       else if(Input.GetMouseButtonDown(0) && B6.HitTest(Input.mousePosition))
      {
		text.text=text.text+"6";
      } 
       else if(Input.GetMouseButtonDown(0) && B7.HitTest(Input.mousePosition))
      {
		text.text=text.text+"7";
      } 
       else if(Input.GetMouseButtonDown(0) && B8.HitTest(Input.mousePosition))
      {
		text.text=text.text+"8";
      } 
       else if(Input.GetMouseButtonDown(0) && B9.HitTest(Input.mousePosition))
      {
		text.text=text.text+"9";
      } 
       else if(Input.GetMouseButtonDown(0) && C.HitTest(Input.mousePosition))
      {
		text.text="";
      } 
      else if(Input.GetMouseButtonDown(0) && back.HitTest(Input.mousePosition))
      {
		Application.LoadLevel("menu");
      }
       else if(Input.GetMouseButtonDown(0) && OK.HitTest(Input.mousePosition))
      {
		switch(text.text){
				case "095213": PlayerPrefs.SetInt("lvl", 20); GameObject.Find("tada").audio.Play(); break; //sblocca tutti i livelli di gioco
				case "95040": PlayerPrefs.SetInt("bullet", 999); GameObject.Find("tada").audio.Play(); break; ///999 munizioni
				case "99326": PlayerPrefs.SetInt("coin", 999); GameObject.Find("tada").audio.Play(); break; ///999 coin
				case "35852": PlayerPrefs.SetInt("lvl", 5); GameObject.Find("tada").audio.Play(); break; ///sblocca egitto
				case "11354": PlayerPrefs.SetInt("lvl", 10); GameObject.Find("tada").audio.Play(); break; ///sblocca spazio
				case "20203": PlayerPrefs.SetInt("lvl", 15); GameObject.Find("tada").audio.Play(); break; ///sblocca medioevo
				case "26266": 	PlayerPrefs.SetInt("gemma1lvl2", 1);
							    PlayerPrefs.SetInt("gemma2lvl2", 1);
							    PlayerPrefs.SetInt("gemma3lvl2", 1);
							    PlayerPrefs.SetInt("gemma4lvl2", 1);
							    PlayerPrefs.SetInt("gemma5lvl2", 1);
							    PlayerPrefs.SetInt("gemma6lvl2", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme egitto
				case "25256": 	PlayerPrefs.SetInt("gemma1lvl3", 1);
							    PlayerPrefs.SetInt("gemma2lvl3", 1);
							    PlayerPrefs.SetInt("gemma3lvl3", 1);
							    PlayerPrefs.SetInt("gemma4lvl3", 1);
							    PlayerPrefs.SetInt("gemma5lvl3", 1);
							    PlayerPrefs.SetInt("gemma6lvl3", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme spazio
				case "21206": 	PlayerPrefs.SetInt("gemma1lvl4", 1);
							    PlayerPrefs.SetInt("gemma2lvl4", 1);
							    PlayerPrefs.SetInt("gemma3lvl4", 1);
							    PlayerPrefs.SetInt("gemma4lvl4", 1);
							    PlayerPrefs.SetInt("gemma5lvl4", 1);
							    PlayerPrefs.SetInt("gemma6lvl4", 1);
							    GameObject.Find("tada").audio.Play();
							    break; ///setta tutte le gemme medioevo
				default: GameObject.Find("error").audio.Play();
		}
      }
     } 
}