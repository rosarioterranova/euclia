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
var dialogIT :GameObject;
var dialogUK :GameObject;

var dialog1 :GameObject;
var dialog2 :GameObject;
var dialog3 :GameObject;

var dialog1UK :GameObject;
var dialog2UK :GameObject;
var dialog3UK :GameObject;

function Start () {
	Physics.gravity = new Vector3(0f,-8,0f);
	Time.timeScale = 1;
	vdoor.enabled  = false;
	dialog1.active = false;
	dialog2.active = false;
	dialog3.active = false;
	dialog1UK.active = false;
	dialog2UK.active = false;
	dialog3UK.active = false;
	life.vita=4;
}

function Update () {
	if (PlayerPrefs.GetInt("lingua") == 0){
		var dist = Vector3.Distance(player.transform.position, commissario.transform.position);
		if(dist<6){
			commissario.animation.Play();
			dialog1.active = true;
			aspetta1();
			dialog2.active = true;
			aspetta2();
			dialog3.active = true;
			
		}
	}
	if (PlayerPrefs.GetInt("lingua") == 1){
		dialogIT.SetActive(false);
		dialogUK.SetActive(true);
		var diste = Vector3.Distance(player.transform.position, commissario.transform.position);
		if(diste<6){
			commissario.animation.Play();
			dialog1UK.active = true;
			aspetta1UK();
			dialog2UK.active = true;
			aspetta2UK();
			dialog3UK.active = true;
			
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
	var distCitta = Vector3.Distance(player.transform.position, GameObject.Find("rg1024_Door").transform.position);
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
						menu.sottomenu = 4;
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
						Application.LoadLevel("lvl1 Loading - City");
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
						menu.sottomenu = 4;
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
						Application.LoadLevel("lvl1 Loading - City");
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

function aspetta1()
    {
        yield WaitForSeconds(5);
        dialog1.active = false;
    }
    
    function aspetta2()
    {
        yield WaitForSeconds(10);
        dialog2.active = false;
    }
function aspetta1UK()
    {
        yield WaitForSeconds(5);
        dialog1UK.active = false;
    }
    
    function aspetta2UK()
    {
        yield WaitForSeconds(10);
        dialog2UK.active = false;
    }