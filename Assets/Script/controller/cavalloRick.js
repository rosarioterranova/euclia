#pragma strict

//Valori trasporto
var defaultUP: float;
var defaultDOWN: float;
var up : GUITexture; //bottone touch
var down : GUITexture; //bottone touch
var accelerazione : boolean = false; //controlla se il suono d'accelerazione è partito
static var ferma : boolean = false; //controlla se il suono d'accelerazione è partito

//Camera
var cameraPlayer : Camera;

//Parametri GUI
var numProiettili: GUIText; //GUIText dei proiettili
var numCoin: GUIText; //GUIText dei coin

static var morte : boolean = false; //controlla se è morto

function Start () {
	ferma = false;
}

function Update () {

		//Settaggio parametri GUI
		numProiettili.text = PlayerPrefs.GetInt("bullet").ToString(); //mostra nella gui il numero di proiettili totali
		numCoin.text = PlayerPrefs.GetInt("coin").ToString(); //mostra nella gui il numero di coin totali
		
		//Accelerazione cavallo
		if (!ferma) this.transform.Translate(Vector3.right*8*Time.deltaTime);
		if (morte == true){
			ferma=true;
			GameObject.Find("Horses Galloping").audio.Stop();
		}
		
		//Gestione touch
		if (menu.attivaTouch){
			//Bottoni touch
			var tapCount = Input.touchCount;
			for ( var i = 0 ; i < tapCount ; i++ ) {
				var touch = Input.GetTouch(i);
				
				//Movimento su
				if(touch.phase == TouchPhase.Began && up.HitTest(touch.position))
				{
					transform.position.y = defaultUP;
				}
				
				//Movimento giù
				if(touch.phase == TouchPhase.Began && down.HitTest(touch.position))
				{
					transform.position.y = defaultDOWN;
				}
			}
		}
		
		//Gestione tasti PC
		if (menu.attivaTasti){
			GameObject.Find("bottoni touch").transform.position.y=4000;
			if(Input.GetKey(KeyCode.UpArrow))
			{
				transform.position.y = defaultUP;
			}
			
			//Movimento giù
			if(Input.GetKey(KeyCode.DownArrow))
			{
				transform.position.y = defaultDOWN;
			}
		}
	
	//Movimento camera
	cameraPlayer.transform.position.x = this.transform.position.x+7;
}