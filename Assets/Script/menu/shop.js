#pragma strict
var back : GUITexture;
var numProiettili: GUIText; //GUIText dei proiettili
var numCoin: GUIText; //GUIText dei coin

//Prodotti
var bullet : GUITexture; 
var bullet2 : GUITexture;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)) Application.LoadLevel("menu");
	numProiettili.text = PlayerPrefs.GetInt("bullet").ToString();
	numCoin.text = PlayerPrefs.GetInt("coin").ToString();
	
	//Gestione touch
	if (menu.attivaTouch){
		if (Input.touchCount == 1)
	    {
	    var touch: Touch = Input.touches[0]; 
	    if(touch.phase == TouchPhase.Began && back.HitTest(touch.position))
	      {
	      	menu.sottomenu = 3;
			Application.LoadLevel("menu");
	      }
	     else if(touch.phase == TouchPhase.Began && bullet.HitTest(touch.position))
	      {
	      	if(PlayerPrefs.GetInt("coin")>=50){
		      	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")+25);
		      	PlayerPrefs.SetInt("coin", PlayerPrefs.GetInt("coin")-50);
		      	GameObject.Find("coinSound").audio.Play();
	      	}
	      	else GameObject.Find("error").audio.Play();
	      }
	      else if(touch.phase == TouchPhase.Began && bullet2.HitTest(touch.position))
	      {
	      	if(PlayerPrefs.GetInt("coin")>=100){
		      	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")+75);
		      	PlayerPrefs.SetInt("coin", PlayerPrefs.GetInt("coin")-100);
		      	GameObject.Find("coinSound").audio.Play();
	      	}
	      	else GameObject.Find("error").audio.Play();
	      }
	    }
	 }

	//Gestione tasti PC
	if (menu.attivaTasti){
	    if(Input.GetMouseButtonDown(0) && back.HitTest(Input.mousePosition))
	      {
	      	menu.sottomenu = 3;
			Application.LoadLevel("menu");
	      }
	     else if(Input.GetMouseButtonDown(0) && bullet.HitTest(Input.mousePosition))
	      {
	      	if(PlayerPrefs.GetInt("coin")>=50){
		      	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")+25);
		      	PlayerPrefs.SetInt("coin", PlayerPrefs.GetInt("coin")-50);
		      	GameObject.Find("coinSound").audio.Play();
	      	}
	      	else GameObject.Find("error").audio.Play();
	      }
	      else if(Input.GetMouseButtonDown(0) && bullet2.HitTest(Input.mousePosition))
	      {
	      	if(PlayerPrefs.GetInt("coin")>=100){
		      	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")+75);
		      	PlayerPrefs.SetInt("coin", PlayerPrefs.GetInt("coin")-100);
		      	GameObject.Find("coinSound").audio.Play();
	      	}
	      	else GameObject.Find("error").audio.Play();
	      }
	    }
}