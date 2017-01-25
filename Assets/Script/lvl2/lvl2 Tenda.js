#pragma strict
var player: GameObject;
var commissario: GameObject;
var vdoor : GUITexture;
var vPausa : GUITexture;

//menu pausa
var pausaMenu : GameObject; //insieme degli elementi del menu di pausa
var riprendi : GUITexture; //bottone riprendi del menu du pausa
var menu0 : GUITexture; //bottone vai al menu principale del menu du pausa
var paused : boolean = false; //controlla se la pausa è inserita

//menu completato
var completatoMenu : GameObject; //insieme degli elementi del menu di pausa
var prossimo : GUITexture; //bottone riprendi del menu du pausa
var menu2 : GUITexture; //bottone vai al menu principale del menu du pausa
var completato : boolean = false; //controlla se la pausa è inserita
var tadaSuonato : boolean = false; //controlla il sono di completato livello è stato suonato

//dialoghi
var dialog1 :GameObject;
var dialogUK :GameObject;

function Start () {
	vdoor.enabled  = false;
	dialog1.active = false;
	Physics.gravity = new Vector3(0f,-9.81f,0f);
	Time.timeScale = 1;
	life2.vita=4;
}

function Update () {
	var dist = Vector3.Distance(player.transform.position, commissario.transform.position);
	if(dist<6){
		dialog1.active = true;
		if (PlayerPrefs.GetInt("lingua") == 1){
		dialogUK.SetActive(true);
		}
	}
	//Gestione menu pausa
		if(Input.GetKeyDown(KeyCode.Escape) && rick.morte == false){
			if(paused ==false){
				paused = true;
				Time.timeScale = 0;
				pausaMenu.SetActive(true);
			}
			else if (paused == true){
				paused = false;
				Time.timeScale = 1;
				pausaMenu.SetActive(false);
			}
		}
	var distCitta = Vector3.Distance(player.transform.position, GameObject.Find("open tend").transform.position);
	if (distCitta<6)
	{
		vdoor.enabled  = true;
		if (Input.touchCount == 1 && (menu.attivaTouch))
		    {
		    var touch: Touch = Input.touches[0]; 
		    if(touch.phase == TouchPhase.Began && vdoor.HitTest(touch.position))
		      {
		      	completato = true;
			  }
		    }
		 if (menu.attivaTasti)
		    {
		    if(Input.GetMouseButtonDown(0) && vdoor.HitTest(Input.mousePosition))
		      {
		      	completato = true;
			  }
		    }
	}
	else vdoor.enabled  = false;
	
			//Gestione bottoni touch
	if (menu.attivaTouch){	
			var tapCount = Input.touchCount;
			for ( var i = 0 ; i < tapCount ; i++ ) {
				var touchar = Input.GetTouch(i);
				
				//Bottone pausaGUI
				if(touchar.phase == TouchPhase.Began && vPausa.HitTest(touchar.position) && rick.morte == false){
					if(paused ==false){
						paused = true;
						Time.timeScale = 0;
						pausaMenu.SetActive(true);
					}
					else if (paused == true){
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
					}
				}
				
				//Bottoni menu pausa
				if (paused == true && rick.morte == false){
					if(touchar.phase == TouchPhase.Began && riprendi.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
					}
					else if(touchar.phase == TouchPhase.Began && menu0.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
						menu.sottomenu = 5;
						Application.LoadLevel("menu");
					}
				}
				
				//Bottoni menu completato
				if (completato == true && rick.morte == false && paused == false){
					completatoMenu.SetActive(true);
					if(tadaSuonato==false){GameObject.Find("tada").audio.Play(); tadaSuonato=true;}
					if(touchar.phase == TouchPhase.Began && prossimo.HitTest(touchar.position)){
						Time.timeScale = 1;
						GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Sfinge");
						completatoMenu.SetActive(false);
					}
					else if(touchar.phase == TouchPhase.Began && menu2.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						completatoMenu.SetActive(false);
						menu.sottomenu = 5;
						Application.LoadLevel("menu");
					}
				}
			}//Fine gestione bottoni touch
		}
	
	//Gestione mouse
	if (menu.attivaTasti){	
		//Bottone pausaGUI
				if(Input.GetMouseButtonDown(0) && vPausa.HitTest(Input.mousePosition) && rick.morte == false){
					if(paused ==false){
						paused = true;
						Time.timeScale = 0;
						pausaMenu.SetActive(true);
					}
					else if (paused == true){
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
					}
				}
				
				//Bottoni menu pausa
				if (paused == true && rick.morte == false){
					if(Input.GetMouseButtonDown(0) && riprendi.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
					}
					else if(Input.GetMouseButtonDown(0) && menu0.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						pausaMenu.SetActive(false);
						menu.sottomenu = 5;
						Application.LoadLevel("menu");
					}
				}

				//Bottoni menu completato
				if (completato == true && rick.morte == false && paused == false){
					completatoMenu.SetActive(true);
					if(tadaSuonato==false){GameObject.Find("tada").audio.Play(); tadaSuonato=true;}
					if(Input.GetMouseButtonDown(0) && prossimo.HitTest(Input.mousePosition)){
						Time.timeScale = 1;
						GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Sfinge");
						completatoMenu.SetActive(false);
					}
					else if(Input.GetMouseButtonDown(0) && menu2.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						completatoMenu.SetActive(false);
						menu.sottomenu = 5;
						Application.LoadLevel("menu");
					}
				}
	}
}