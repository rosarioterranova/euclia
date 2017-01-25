//Menu pausa
var pausaMenu : GameObject; //insieme degli elementi del menu di pausa
var riprendi : GUITexture; //bottone riprendi del menu du pausa
var menu0 : GUITexture; //bottone vai al menu principale del menu du pausa
var paused : boolean = false; //controlla se la pausa è inserita

var vPausa : GUITexture;

//menu ritenta
var ritentaMenu : GameObject; //insieme degli elementi del menu di morte
var riprova : GUITexture; //bottone riprendi del menu du pausa
var menu1 : GUITexture; //bottone vai al menu principale del menu di pausa

//menu completato
var completatoMenu : GameObject; //insieme degli elementi del menu di pausa
var prossimo : GUITexture; //bottone riprendi del menu du pausa
var menu2 : GUITexture; //bottone vai al menu principale del menu du pausa
var completato : boolean = false; //controlla se la pausa è inserita
var tadaSuonato : boolean = false; //controlla il sono di completato livello è stato suonato

var finito : boolean = false;

function Start(){
	Physics.gravity = new Vector3(0f,-8,0f);
	Time.timeScale = 1;
	lifeCar.vita=4;
}

function Update(){

//Fine Livello
	var distFine = Vector3.Distance(GameObject.Find("fine").transform.position, GameObject.Find("rick car").transform.position);
	
if(distFine<2 && (!finito))
	{
		Time.timeScale = 0;
		finito = true;
		completato = true;
		completatoMenu.SetActive(true);
		if(tadaSuonato==false){GameObject.Find("tada").audio.Play(); tadaSuonato=true;};
	}

	//Gestione menu pausa
		if(Input.GetKeyDown(KeyCode.Escape) && trasporto.morte == false){
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
		
		//Gestione menu morte
		if(trasporto.morte == true) ritentaMenu.SetActive(true);
		
			//Gestione bottoni touch
	if (menu.attivaTouch){	
			var tapCount = Input.touchCount;
			for ( var i = 0 ; i < tapCount ; i++ ) {
				var touchar = Input.GetTouch(i);
				
				//Bottone pausaGUI
				if(touchar.phase == TouchPhase.Began && vPausa.HitTest(touchar.position) && trasporto.morte == false){
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
				if (paused == true && trasporto.morte == false){
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
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
				
				//Bottoni menu morte
				else if (trasporto.morte == true && paused == false){
					if(touchar.phase == TouchPhase.Began && riprova.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						ritentaMenu.SetActive(false);
						trasporto.morte = false;
						lifeCar.vita = 4;
						Application.LoadLevel(Application.loadedLevel);
					}
					else if(touchar.phase == TouchPhase.Began && menu1.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						ritentaMenu.SetActive(false);
						trasporto.morte = false;
						lifeCar.vita = 4;
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
				
				//Bottoni menu completato
				if (completato == true && trasporto.morte == false && paused == false){
					completatoMenu.SetActive(true);
					if(tadaSuonato==false){GameObject.Find("tada").audio.Play(); tadaSuonato=true;}
					if(touchar.phase == TouchPhase.Began && prossimo.HitTest(touchar.position)){
						Time.timeScale = 1;
						GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - FBI");
						completatoMenu.SetActive(false);
					}
					else if(touchar.phase == TouchPhase.Began && menu2.HitTest(touchar.position)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						completatoMenu.SetActive(false);
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
			}//Fine gestione bottoni touch
		}
	
	//Gestione mouse
	if (menu.attivaTasti){	
		//Bottone pausaGUI
				if(Input.GetMouseButtonDown(0) && vPausa.HitTest(Input.mousePosition) && trasporto.morte == false){
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
				if (paused == true && trasporto.morte == false){
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
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
				
				//Bottoni menu morte
				else if (trasporto.morte == true && paused == false){
					if(Input.GetMouseButtonDown(0) && riprova.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						ritentaMenu.SetActive(false);
						trasporto.morte = false;
						lifeCar.vita = 4;
						Application.LoadLevel(Application.loadedLevel);
					}
					else if(Input.GetMouseButtonDown(0) && menu1.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						ritentaMenu.SetActive(false);
						trasporto.morte = false;
						lifeCar.vita = 4;
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
				
				//Bottoni menu completato
				if (completato == true && trasporto.morte == false && paused == false){
					completatoMenu.SetActive(true);
					if(tadaSuonato==false){GameObject.Find("tada").audio.Play(); tadaSuonato=true;}
					if(Input.GetMouseButtonDown(0) && prossimo.HitTest(Input.mousePosition)){
						Time.timeScale = 1;
						GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - FBI");
						completatoMenu.SetActive(false);
					}
					else if(Input.GetMouseButtonDown(0) && menu2.HitTest(Input.mousePosition)){
						GameObject.Find("click").audio.Play();
						paused = false;
						Time.timeScale = 1;
						completatoMenu.SetActive(false);
						menu.sottomenu = 4;
						Application.LoadLevel("menu");
					}
				}
	}
}