#pragma strict

//Menu principale (0)
var principaleMenu: GameObject;
var principaleAttivo: boolean = true;
var gioca : GUITexture; 
var esci : GUITexture;
var info : GUITexture;
var settings : GUITexture;

//Menu informazioni (1)
var informazioniMenu: GameObject; 
var informazioniAttivo: boolean = false;
var back : GUITexture; 
var email : GUITexture;
var facebook : GUITexture;

//Menu impostazioni (2)
var settingsMenu: GameObject; 
var settingsAttivo: boolean = false;
var backSettings : GUITexture;
var reset : GUITexture;
var soundON : GUITexture;
var soundOFF : GUITexture;
//sottomenu reset
var resetMenu: GameObject;
var resetAttivo: boolean = false;
var siReset : GUITexture;
var noReset : GUITexture;
var trucchi : GUITexture;
var lingua : GUITexture;

//Menu mondo (3)
var mondoMenu: GameObject; 
var mondoAttivo: boolean = false;
var shop : GUITexture;
var backMondo : GUITexture;
var leftM : GUITexture;
var rightM : GUITexture;
var presente : GUITexture;
var egitto : GUITexture;
var spazio : GUITexture;

//Menu presente (4)
var presenteMenu: GameObject; 
var presenteAttivo: boolean = false;
var backPresente : GUITexture;
var casa : GUITexture;
var campagna : GUITexture;
var porte : GUITexture;
var fbi : GUITexture;
var citta : GUITexture;

//Menu egitto (5)
var egittoMenu: GameObject; 
var egittoAttivo: boolean = false;
var backEgitto : GUITexture;
var nilo : GUITexture;
var tenda : GUITexture;
var sfinge : GUITexture;
var piramide : GUITexture;
var tomba : GUITexture;

//Menu spazio (6)
var spazioMenu: GameObject; 
var spazioAttivo: boolean = false;
var backspazio : GUITexture;
var baseLunare : GUITexture;
var fascia : GUITexture;
var marte : GUITexture;
var cityfuture : GUITexture;
var mostro : GUITexture;

//Menu mondo2 (7)
var mondo2Menu: GameObject; 
var mondo2Attivo: boolean = false;
var shop2 : GUITexture;
var backMondo2 : GUITexture;
var leftM2 : GUITexture;
var rightM2 : GUITexture;
var medioevo : GUITexture;

//Menu medioevo (6)
var medioevoMenu: GameObject; 
var medioevoAttivo: boolean = false;
var backmedioevo : GUITexture;
var foresta : GUITexture;
var castello : GUITexture;
var assedio : GUITexture;
var forte : GUITexture;
var drago : GUITexture;

//Gestione Gemme Egitto
var numGemme: GUIText;
static var gemme : int = 0; //numero gemme
var gemmeControllo: GameObject; 
var servonoGemme : GUITexture;
var servonoAttivo: boolean = false;

//Gestione Gemme Spazio
var numGemmeS: GUIText;
static var gemmeS : int = 0; //numero gemme
var gemmeControlloS: GameObject; 
var servonoGemmeS : GUITexture;
var servonoAttivoS: boolean = false;

//Gestione Gemme Medioevo
var numGemmeM: GUIText;
static var gemmeM : int = 0; //numero gemme
var gemmeControlloM: GameObject; 
var servonoGemmeM : GUITexture;
var servonoAttivoM: boolean = false;

static var sottomenu : int = 0;

//Gestione modalità di input
static var attivaTouch: boolean;
static var attivaTasti: boolean;

function Start () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep; //schermo non si spegne mai
	Physics.gravity = new Vector3(0f,-9.81f,0f);
	
	//Entra direttamente nei sottomenu
	if(sottomenu==3){ //seleziona mondo
				principaleAttivo=false;
				mondoAttivo=true;
				principaleMenu.SetActive(false);
				mondoMenu.SetActive(true);
	}
	else if(sottomenu==4){ //presente
				principaleAttivo=false;
				presenteAttivo=true;
				principaleMenu.SetActive(false);
				presenteMenu.SetActive(true);
	}
	else if(sottomenu==5){ //egitto
				principaleAttivo=false;
				egittoAttivo=true;
				principaleMenu.SetActive(false);
				egittoMenu.SetActive(true);
	}
	else if(sottomenu==6){ //spazio
				principaleAttivo=false;
				spazioAttivo=true;
				principaleMenu.SetActive(false);
				spazioMenu.SetActive(true);
	}
	else if(sottomenu==7){ //medioevo
				principaleAttivo=false;
				medioevoAttivo=true;
				principaleMenu.SetActive(false);
				medioevoMenu.SetActive(true);
	}
	sottomenu = 0;
	
	//Controllo Gemme Egitto
	gemme=0;
	if(PlayerPrefs.GetInt("gemma1lvl2") ==1) gemme+=1;
   	if(PlayerPrefs.GetInt("gemma2lvl2") ==1) gemme+=1;
    if(PlayerPrefs.GetInt("gemma3lvl2") ==1) gemme+=1;
    if(PlayerPrefs.GetInt("gemma4lvl2") ==1) gemme+=1;
    if(PlayerPrefs.GetInt("gemma5lvl2") ==1) gemme+=1;
    if(PlayerPrefs.GetInt("gemma6lvl2") ==1) gemme+=1;  
	numGemme.text = gemme.ToString();
	
	//Controllo Gemme Spazio
	gemmeS=0;
	if(PlayerPrefs.GetInt("gemma1lvl3") ==1) gemmeS+=1;
   	if(PlayerPrefs.GetInt("gemma2lvl3") ==1) gemmeS+=1;
    if(PlayerPrefs.GetInt("gemma3lvl3") ==1) gemmeS+=1;
    if(PlayerPrefs.GetInt("gemma4lvl3") ==1) gemmeS+=1;
    if(PlayerPrefs.GetInt("gemma5lvl3") ==1) gemmeS+=1;
    if(PlayerPrefs.GetInt("gemma6lvl3") ==1) gemmeS+=1;  
	numGemmeS.text = gemmeS.ToString();
	
	
	//Controllo Gemme medioevo
	gemmeM=0;
	if(PlayerPrefs.GetInt("gemma1lvl4") ==1) gemmeM+=1;
   	if(PlayerPrefs.GetInt("gemma2lvl4") ==1) gemmeM+=1;
    if(PlayerPrefs.GetInt("gemma3lvl4") ==1) gemmeM+=1;
    if(PlayerPrefs.GetInt("gemma4lvl4") ==1) gemmeM+=1;
    if(PlayerPrefs.GetInt("gemma5lvl4") ==1) gemmeM+=1;
    if(PlayerPrefs.GetInt("gemma6lvl4") ==1) gemmeM+=1;  
	numGemmeM.text = gemmeM.ToString();
}

function Update () {

	//Valori da salvare
	if (PlayerPrefs.HasKey("MySetting") == false) {
        SetPreferences () ; //se la chiave non c'è la crea la prima volta
    }
    
   if(PlayerPrefs.GetInt("attivaTouch") == 0) attivaTouch=false;
   if(PlayerPrefs.GetInt("attivaTouch") == 1) attivaTouch=true;
   if(PlayerPrefs.GetInt("attivaTasti") == 0) attivaTasti=false;
   if(PlayerPrefs.GetInt("attivaTasti") == 1) attivaTasti=true;
    
	if(Input.GetKeyDown(KeyCode.Escape)) Application.Quit(); //botone fisico back
	GameObject.Find("airplaneR").transform.position.x-=1*Time.deltaTime; //volare l'aereo
	
	//Controllo audio muto
	if (PlayerPrefs.GetInt("suoni")==1){
		soundON.enabled=true;
		soundOFF.enabled=false;
		GameObject.Find("Main Camera").GetComponent(AudioListener).volume = 1;
	}
	if (PlayerPrefs.GetInt("suoni")==0){
		soundON.enabled=false;
		soundOFF.enabled=true;
		GameObject.Find("Main Camera").GetComponent(AudioListener).volume = 0;
	}
	
	//Gestione tocco
	if (menu.attivaTouch){
			//Bottoni touch
			if (Input.touchCount == 1)
		    {
		    var touch: Touch = Input.touches[0]; 
		    
		    	//Menu principale
			    if(principaleAttivo == true){
				    if(touch.phase == TouchPhase.Began && gioca.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						mondoAttivo=true;
						principaleMenu.SetActive(false);
						mondoMenu.SetActive(true);
				      }
				     if(touch.phase == TouchPhase.Began && esci.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.Quit();
				      }
				      if(touch.phase == TouchPhase.Began && info.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						informazioniAttivo=true;
						principaleMenu.SetActive(false);
						informazioniMenu.SetActive(true);
				      }
				      if(touch.phase == TouchPhase.Began && settings.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						settingsAttivo=true;
						principaleMenu.SetActive(false);
						settingsMenu.SetActive(true);
				      }
				 }
			 
			 	//Menu informazioni
				 else if(informazioniAttivo == true){
				    if(touch.phase == TouchPhase.Began && back.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						informazioniAttivo=false;
						principaleMenu.SetActive(true);
						informazioniMenu.SetActive(false);
				      }
				     if(touch.phase == TouchPhase.Began && email.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.OpenURL("mailto:rosterbyte@outlook.com?subject=Euclia Feedback&body=text");
				      }
				      if(touch.phase == TouchPhase.Began && facebook.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.OpenURL("http://rosarioterranova.blogspot.it/");
				      }
				 } 
				 
				 //Menu scegli mondo
				 else if(mondoAttivo == true){
				    if(touch.phase == TouchPhase.Began && backMondo.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						mondoAttivo=false;
						principaleMenu.SetActive(true);
						mondoMenu.SetActive(false);
				      }
				      if(touch.phase == TouchPhase.Began && shop.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("shop");
				      }
				      if(touch.phase == TouchPhase.Began && leftM.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						//
				      }
				     if(touch.phase == TouchPhase.Began && rightM.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondo2Attivo=true;
						mondo2Menu.SetActive(true);
						mondoAttivo=false;
						mondoMenu.SetActive(false);
				      }
				     if(touch.phase == TouchPhase.Began && presente.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						presenteAttivo=true;
						mondoMenu.SetActive(false);
						presenteMenu.SetActive(true);
				      }
				      if(touch.phase == TouchPhase.Began && egitto.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=5)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						egittoAttivo=true;
						mondoMenu.SetActive(false);
						egittoMenu.SetActive(true);
				      }
				      if(touch.phase == TouchPhase.Began && spazio.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=10)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						spazioAttivo=true;
						mondoMenu.SetActive(false);
						spazioMenu.SetActive(true);
				      }
				 }
				 
				 //Menu mondo presente
				 else if(presenteAttivo == true){
				    if(touch.phase == TouchPhase.Began && backPresente.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						presenteAttivo=false;
						mondoMenu.SetActive(true);
						presenteMenu.SetActive(false);
				      }
				     if(touch.phase == TouchPhase.Began && casa.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 - Comic");
				      }
				       if(touch.phase == TouchPhase.Began && campagna.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=1)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - Campagna");
				      }
				       if(touch.phase == TouchPhase.Began && porte.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=2)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - Porte");
				      }
				      if(touch.phase == TouchPhase.Began && fbi.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=3)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - FBI");
				      }
				      if(touch.phase == TouchPhase.Began && citta.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=4)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - City");
				      }
				 }
				 
				 //Menu mondo egitto
				 else if(egittoAttivo == true){
				    if(touch.phase == TouchPhase.Began && backEgitto.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						egittoAttivo=false;
						mondoMenu.SetActive(true);
						egittoMenu.SetActive(false);
				      }
				      if(touch.phase == TouchPhase.Began && nilo.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=5)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Nilo");
				      }
				      if(touch.phase == TouchPhase.Began && tenda.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=6)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Tenda");
				      }
				      if(touch.phase == TouchPhase.Began && sfinge.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=7)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Sfinge");
				      }
				      if(touch.phase == TouchPhase.Began && piramide.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=8)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Piramide");
				      }
				      if(touch.phase == TouchPhase.Began && tomba.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=9)
				      {
				      	if(gemme==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl2 Loading - Pharaon");
						}
						else{
							if(servonoAttivo==false){
								servonoAttivo=true;
								gemmeControllo.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(touch.phase == TouchPhase.Began && servonoGemme.HitTest(touch.position) && servonoAttivo==true){
								servonoAttivo=false;
								gemmeControllo.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu mondo spazio
				 else if(spazioAttivo == true){
				    if(touch.phase == TouchPhase.Began && backspazio.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						spazioAttivo=false;
						mondoMenu.SetActive(true);
						spazioMenu.SetActive(false);
				      }
				      if(touch.phase == TouchPhase.Began && baseLunare.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=10)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Base");
				      }
				      if(touch.phase == TouchPhase.Began && fascia.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=11)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Fascia");
				      }
				      if(touch.phase == TouchPhase.Began && marte.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=12)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Marte");
				      }
				      if(touch.phase == TouchPhase.Began && cityfuture.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=13)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - City Future");
				      }
				      if(touch.phase == TouchPhase.Began && mostro.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=14)
				      {
				      	if(gemmeS==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl3 Loading - Monster");
						}
						else{
							if(servonoAttivoS==false){
								servonoAttivoS=true;
								gemmeControlloS.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(touch.phase == TouchPhase.Began && servonoGemmeS.HitTest(touch.position) && servonoAttivoS==true){
								servonoAttivoS=false;
								gemmeControlloS.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu scegli mondo 2
				 else if(mondo2Attivo == true){
				    if(touch.phase == TouchPhase.Began && backMondo2.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						mondo2Attivo=false;
						principaleMenu.SetActive(true);
						mondo2Menu.SetActive(false);
				      }
				      if(touch.phase == TouchPhase.Began && shop2.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("shop");
				      }
				      if(touch.phase == TouchPhase.Began && leftM2.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						mondoMenu.SetActive(true);
						mondo2Attivo=false;
						mondo2Menu.SetActive(false);
				      }
				     if(touch.phase == TouchPhase.Began && rightM2.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	//
				      }
				     if(touch.phase == TouchPhase.Began && medioevo.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=15)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondo2Attivo=false;
						medioevoAttivo=true;
						mondo2Menu.SetActive(false);
						medioevoMenu.SetActive(true);
				      }
				 }
				 
				 //Menu mondo medioevo
				 else if(medioevoAttivo == true){
				    if(touch.phase == TouchPhase.Began && backmedioevo.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						mondo2Attivo=true;
						medioevoAttivo=false;
						mondo2Menu.SetActive(true);
						medioevoMenu.SetActive(false);
				      }
				      if(touch.phase == TouchPhase.Began && foresta.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=15)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Foresta");
				      }
				      if(touch.phase == TouchPhase.Began && castello.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=16)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Castello");
				      }
				      if(touch.phase == TouchPhase.Began && assedio.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=17)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Cavallo");
				      }
				       if(touch.phase == TouchPhase.Began && forte.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=18)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Forte");
				      }
				       if(touch.phase == TouchPhase.Began && drago.HitTest(touch.position) && PlayerPrefs.GetInt("lvl")>=19)
				      {
				      	if(gemmeM==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl4 Loading - Drago");
						}
						else{
							if(servonoAttivoM==false){
								servonoAttivoM=true;
								gemmeControlloM.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(touch.phase == TouchPhase.Began && servonoGemmeM.HitTest(touch.position) && servonoAttivoM==true){
								servonoAttivoM=false;
								gemmeControlloM.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu settings
				 else if(settingsAttivo == true){
				    if(touch.phase == TouchPhase.Began && backSettings.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						settingsAttivo=false;
						principaleMenu.SetActive(true);
						settingsMenu.SetActive(false);
				      }
				     if(touch.phase == TouchPhase.Began && reset.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
				      	resetAttivo = true;
				      	resetMenu.SetActive(true);
				      }
				      if(soundON.enabled ==true){
					      if(touch.phase == TouchPhase.Began && soundON.HitTest(touch.position))
					      {
					      	GameObject.Find("click").audio.Play();
					      	PlayerPrefs.SetInt("suoni", 0);
					      }
				      }
						else{
						    var toucha: Touch = Input.touches[0]; 
						    if(toucha.phase == TouchPhase.Began && soundOFF.HitTest(toucha.position))
						      	{
								 	GameObject.Find("click").audio.Play();
							      	PlayerPrefs.SetInt("suoni", 1);
							  	}
							}
						//sottomenu Reset
						if (resetAttivo == true){
				      		var touchb: Touch = Input.touches[0]; 
						    if(touchb.phase == TouchPhase.Began && siReset.HitTest(touchb.position))
						      	{
								 	GameObject.Find("click").audio.Play();
							      	PlayerPrefs.DeleteAll();
							      	resetAttivo = false;
							      	resetMenu.SetActive(false);
							      	Application.LoadLevel("menu - selezione lingua");
							  	}
							else if(touchb.phase == TouchPhase.Began && noReset.HitTest(touchb.position))
						      	{
								 	GameObject.Find("click").audio.Play();
								 	resetAttivo = false;
							      	resetMenu.SetActive(false);
							  	}
				      	}
				     if(touch.phase == TouchPhase.Began && trucchi.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("cheats");
				      }
				      if(touch.phase == TouchPhase.Began && lingua.HitTest(touch.position))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("menu - selezione lingua");
				      }
				 }             
		    }
		}
		
		//Gestione tasti PC
		if (menu.attivaTasti){
		    	//Menu principale
			    if(principaleAttivo == true){
				    if(Input.GetMouseButtonDown(0) && gioca.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						mondoAttivo=true;
						principaleMenu.SetActive(false);
						mondoMenu.SetActive(true);
				      }
				     if(Input.GetMouseButtonDown(0)&& esci.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.Quit();
				      }
				      if(Input.GetMouseButtonDown(0) && info.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						informazioniAttivo=true;
						principaleMenu.SetActive(false);
						informazioniMenu.SetActive(true);
				      }
				      if(Input.GetMouseButtonDown(0) && settings.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	principaleAttivo=false;
						settingsAttivo=true;
						principaleMenu.SetActive(false);
						settingsMenu.SetActive(true);
				      }
				 }
			 
			 	//Menu informazioni
				 else if(informazioniAttivo == true){
				    if(Input.GetMouseButtonDown(0) && back.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						informazioniAttivo=false;
						principaleMenu.SetActive(true);
						informazioniMenu.SetActive(false);
				      }
				     if(Input.GetMouseButtonDown(0) && email.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.OpenURL("mailto:rosterbyte@outlook.com?subject=Euclia Feedback&body=text");
				      }
				      if(Input.GetMouseButtonDown(0) && facebook.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.OpenURL("http://rosarioterranova.blogspot.it/");
				      }
				 } 
				 
				 //Menu scegli mondo
				 else if(mondoAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backMondo.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						mondoAttivo=false;
						principaleMenu.SetActive(true);
						mondoMenu.SetActive(false);
				      }
				      if(Input.GetMouseButtonDown(0) && shop.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("shop");
				      }
				      if(Input.GetMouseButtonDown(0) && leftM.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						//
				      }
				     if(Input.GetMouseButtonDown(0) && rightM.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondo2Attivo=true;
						mondo2Menu.SetActive(true);
						mondoAttivo=false;
						mondoMenu.SetActive(false);
				      }
				     if(Input.GetMouseButtonDown(0) && presente.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						presenteAttivo=true;
						mondoMenu.SetActive(false);
						presenteMenu.SetActive(true);
				      }
				      if(Input.GetMouseButtonDown(0) && egitto.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=5)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						egittoAttivo=true;
						mondoMenu.SetActive(false);
						egittoMenu.SetActive(true);
				      }
				      if(Input.GetMouseButtonDown(0) && spazio.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=10)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondoAttivo=false;
						spazioAttivo=true;
						mondoMenu.SetActive(false);
						spazioMenu.SetActive(true);
				      }
				 }
				 
				 //Menu mondo presente
				 else if(presenteAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backPresente.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						presenteAttivo=false;
						mondoMenu.SetActive(true);
						presenteMenu.SetActive(false);
				      }
				     if(Input.GetMouseButtonDown(0) && casa.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 - Comic");
				      }
				       if(Input.GetMouseButtonDown(0) && campagna.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=1)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - Campagna");
				      }
				       if(Input.GetMouseButtonDown(0) && porte.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=2)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - Porte");
				      }
				      if(Input.GetMouseButtonDown(0) && fbi.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=3)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - FBI");
				      }
				      if(Input.GetMouseButtonDown(0) && citta.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=4)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl1 Loading - City");
				      }
				 }
				 
				 //Menu mondo egitto
				 else if(egittoAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backEgitto.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						egittoAttivo=false;
						mondoMenu.SetActive(true);
						egittoMenu.SetActive(false);
				      }
				      if(Input.GetMouseButtonDown(0) && nilo.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=5)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Nilo");
				      }
				      if(Input.GetMouseButtonDown(0) && tenda.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=6)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Tenda");
				      }
				      if(Input.GetMouseButtonDown(0) && sfinge.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=7)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Sfinge");
				      }
				      if(Input.GetMouseButtonDown(0) && piramide.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=8)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl2 Loading - Piramide");
				      }
				      if(Input.GetMouseButtonDown(0) && tomba.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=9)
				      {
				      	if(gemme==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl2 Loading - Pharaon");
						}
						else{
							if(servonoAttivo==false){
								servonoAttivo=true;
								gemmeControllo.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(Input.GetMouseButtonDown(0) && servonoGemme.HitTest(Input.mousePosition) && servonoAttivo==true){
								servonoAttivo=false;
								gemmeControllo.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu mondo spazio
				 else if(spazioAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backspazio.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						spazioAttivo=false;
						mondoMenu.SetActive(true);
						spazioMenu.SetActive(false);
				      }
				      if(Input.GetMouseButtonDown(0) && baseLunare.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=10)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Base");
				      }
				      if(Input.GetMouseButtonDown(0) && fascia.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=11)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Fascia");
				      }
				      if(Input.GetMouseButtonDown(0) && marte.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=12)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - Marte");
				      }
				      if(Input.GetMouseButtonDown(0) && cityfuture.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=13)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl3 Loading - City Future");
				      }
				      if(Input.GetMouseButtonDown(0) && mostro.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=14)
				      {
				      	if(gemmeS==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl3 Loading - Monster");
						}
						else{
							if(servonoAttivoS==false){
								servonoAttivoS=true;
								gemmeControlloS.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(Input.GetMouseButtonDown(0) && servonoGemmeS.HitTest(Input.mousePosition) && servonoAttivoS==true){
								servonoAttivoS=false;
								gemmeControlloS.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu scegli mondo 2
				 else if(mondo2Attivo == true){
				    if(Input.GetMouseButtonDown(0) && backMondo2.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						mondo2Attivo=false;
						principaleMenu.SetActive(true);
						mondo2Menu.SetActive(false);
				      }
				      if(Input.GetMouseButtonDown(0) && shop2.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("shop");
				      }
				      if(Input.GetMouseButtonDown(0) && leftM2.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						mondoAttivo=true;
						mondoMenu.SetActive(true);
						mondo2Attivo=false;
						mondo2Menu.SetActive(false);
				      }
				     if(Input.GetMouseButtonDown(0) && rightM2.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	//
				      }
				     if(Input.GetMouseButtonDown(0) && medioevo.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=15)
				      {
				      	GameObject.Find("click").audio.Play();
				      	mondo2Attivo=false;
						medioevoAttivo=true;
						mondo2Menu.SetActive(false);
						medioevoMenu.SetActive(true);
				      }
				 }
				 
				 //Menu mondo medioevo
				 else if(medioevoAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backmedioevo.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						mondo2Attivo=true;
						medioevoAttivo=false;
						mondo2Menu.SetActive(true);
						medioevoMenu.SetActive(false);
				      }
				      if(Input.GetMouseButtonDown(0) && foresta.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=15)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Foresta");
				      }
				      if(Input.GetMouseButtonDown(0) && castello.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=16)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Castello");
				      }
				      if(Input.GetMouseButtonDown(0) && assedio.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=17)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Cavallo");
				      }
				       if(Input.GetMouseButtonDown(0) && forte.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=18)
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("lvl4 Loading - Forte");
				      }
				       if(Input.GetMouseButtonDown(0) && drago.HitTest(Input.mousePosition) && PlayerPrefs.GetInt("lvl")>=19)
				      {
				      	if(gemmeM==6){
					      	GameObject.Find("click").audio.Play();
							Application.LoadLevel("lvl4 Loading - Drago");
						}
						else{
							if(servonoAttivoM==false){
								servonoAttivoM=true;
								gemmeControlloM.SetActive(true);
								GameObject.Find("click").audio.Play();
							}
							else if(Input.GetMouseButtonDown(0) && servonoGemmeM.HitTest(Input.mousePosition) && servonoAttivoM==true){
								servonoAttivoM=false;
								gemmeControlloM.SetActive(false);
								GameObject.Find("click").audio.Play();
							}
						}
				      }
				 }
				 
				 //Menu settings
				 else if(settingsAttivo == true){
				    if(Input.GetMouseButtonDown(0) && backSettings.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						principaleAttivo=true;
						settingsAttivo=false;
						principaleMenu.SetActive(true);
						settingsMenu.SetActive(false);
				      }
				     if(Input.GetMouseButtonDown(0) && reset.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
				      	resetAttivo = true;
				      	resetMenu.SetActive(true);
				      }
				      if(soundON.enabled ==true){
					      if(Input.GetMouseButtonDown(0) && soundON.HitTest(Input.mousePosition))
					      {
					      	GameObject.Find("click").audio.Play();
					      	PlayerPrefs.SetInt("suoni", 0);
					      }
				      }
						else{
						    if(Input.GetMouseButtonDown(0) && soundOFF.HitTest(Input.mousePosition))
						      	{
								 	GameObject.Find("click").audio.Play();
							      	PlayerPrefs.SetInt("suoni", 1);
							  	}
							}
						//sottomenu Reset
						if (resetAttivo == true){
						    if(Input.GetMouseButtonDown(0) && siReset.HitTest(Input.mousePosition))
						      	{
								 	GameObject.Find("click").audio.Play();
							      	PlayerPrefs.DeleteAll();
							      	resetAttivo = false;
							      	resetMenu.SetActive(false);
							      	Application.LoadLevel(Application.loadedLevel);
							  	}
							else if(Input.GetMouseButtonDown(0) && noReset.HitTest(Input.mousePosition))
						      	{
								 	GameObject.Find("click").audio.Play();
								 	resetAttivo = false;
							      	resetMenu.SetActive(false);
							  	}
				      	}
				     if(Input.GetMouseButtonDown(0) && trucchi.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("cheats");
				      }
				      if(Input.GetMouseButtonDown(0) && lingua.HitTest(Input.mousePosition))
				      {
				      	GameObject.Find("click").audio.Play();
						Application.LoadLevel("menu - selezione lingua");
				      }
				 }             
		}
		
		if(Input.GetKey(KeyCode.R))
		{
			GameObject.Find("click").audio.Play();
			PlayerPrefs.DeleteAll();
			Application.LoadLevel("menu - selezione lingua");
		}
}

//Creazione salvataggi
function SetPreferences () {
    PlayerPrefs.SetInt("MySetting", 0);
    PlayerPrefs.SetInt("suoni", 1); //suoni attivi
    PlayerPrefs.SetInt("coin", 0); //coin totali
    PlayerPrefs.SetInt("bullet", 0); //proiettili totali
    PlayerPrefs.SetInt("lvl", 0); //livelli sbloccati
    
    //Gemme Egitto
    PlayerPrefs.SetInt("gemma1lvl2", 0);
    PlayerPrefs.SetInt("gemma2lvl2", 0);
    PlayerPrefs.SetInt("gemma3lvl2", 0);
    PlayerPrefs.SetInt("gemma4lvl2", 0);
    PlayerPrefs.SetInt("gemma5lvl2", 0);
    PlayerPrefs.SetInt("gemma6lvl2", 0);
    
    //Gemme Spazio
    PlayerPrefs.SetInt("gemma1lvl3", 0);
    PlayerPrefs.SetInt("gemma2lvl3", 0);
    PlayerPrefs.SetInt("gemma3lvl3", 0);
    PlayerPrefs.SetInt("gemma4lvl3", 0);
    PlayerPrefs.SetInt("gemma5lvl3", 0);
    PlayerPrefs.SetInt("gemma6lvl3", 0);
    
    //Gemme Medioevo
    PlayerPrefs.SetInt("gemma1lvl4", 0);
    PlayerPrefs.SetInt("gemma2lvl4", 0);
    PlayerPrefs.SetInt("gemma3lvl4", 0);
    PlayerPrefs.SetInt("gemma4lvl4", 0);
    PlayerPrefs.SetInt("gemma5lvl4", 0);
    PlayerPrefs.SetInt("gemma6lvl4", 0);
    /*
    	0 = lvl1 - casa rick
    	1 = lvl1 - campagna
    	2 = lvl1 - porte
    	3 = lvl1 - fbi
    	4 = lvl1 - city
    	5 = lvl2 - nilo
    	6 = lvl2 - tenda
    	7 = lvl2 - sfinge
    	8 = lvl2 - piramide
    	9 = lvl2 - pharaon
    	10 = lvl3 - base lunare
    	11 = lvl3 - fascia
    	12 = lvl3 - marte
    	13 = lvl3 - euclia city future
    	14 = lvl3 - monster
    	15 = lvl4 - foresta
    	16 = lvl4 - castello
    	17 = lvl4 - assedio
    	18 = lvl4 - forte
    	19 = lvl4 - drago
    */
}