#pragma strict

//Camera
var cameraMain : Camera;
var zposition : float;
var xposition : float;

//variabili di forza
var velocitaCorsa: float = 20;

//variabili dei bottoni touch
var down : GUITexture; //bottone touch
var up : GUITexture; //bottone touch
var vgun : GUITexture; //bottone touch

//variabili degli oggetti
var Bullet : Transform; //proiettile
var Spawn : Transform; //spawn proiettile
static var pel : Transform; //clone del proiettile

//Parametri GUI
var numProiettili: GUIText; //GUIText dei proiettili
var numCoin: GUIText; //GUIText dei coin

static var morte : boolean = false; //controlla se è morto

function Start () {
	pel = GameObject.Find("proiettile").transform;
}

function Update() {
	
	//Camera
	cameraMain.transform.position.y = this.transform.position.y+0;
	cameraMain.transform.position.x = this.transform.position.x+0;
	cameraMain.transform.position.z = zposition;
	cameraMain.transform.position.x = xposition;
	
	//Settaggio parametri GUI
	numProiettili.text = PlayerPrefs.GetInt("bullet").ToString(); //mostra nella gui il numero di proiettili totali
	numCoin.text = PlayerPrefs.GetInt("coin").ToString(); //mostra nella gui il numero di coin totali
	
	//Gestione touch
		if (menu.attivaTouch){
			//Bottoni touch
			var tapCount = Input.touchCount;
			for ( var i = 0 ; i < tapCount ; i++ ) {
				var touch = Input.GetTouch(i);
				
				//Movimento su
				if(touch.phase == TouchPhase.Began && up.HitTest(touch.position))
				{
					transform.position.y+=velocitaCorsa*Time.deltaTime;
				}
				
				//Movimento giù
				if(touch.phase == TouchPhase.Began && down.HitTest(touch.position))
				{
					transform.position.y-=velocitaCorsa*Time.deltaTime;
				}
				//Spararare
				else if(touch.phase == TouchPhase.Ended && vgun.HitTest(touch.position)){
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
			    		pel.rigidbody.AddForce(Spawn.transform.up * 2000);
			    		proiettileSparato(pel);
			    		GameObject.Find("gun fire").audio.Play();
			    		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
			    	}
				}
			}
		}
		
		//Gestione tasti PC
		if (menu.attivaTasti){
			GameObject.Find("bottoni touch").transform.position.y=4000;
			if(Input.GetKey(KeyCode.UpArrow))
			{
				transform.position.y+=velocitaCorsa*Time.deltaTime;
				//Spararare
				if(Input.GetKeyDown(KeyCode.Space)){
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
			    		pel.rigidbody.AddForce(Spawn.transform.up * 2000);
			    		proiettileSparato(pel);
			    		GameObject.Find("gun fire").audio.Play();
			    		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
			    	}
				}
			}
			
			//Movimento giù
			if(Input.GetKey(KeyCode.DownArrow))
			{
				transform.position.y-=velocitaCorsa*Time.deltaTime;
				//Spararare
				if(Input.GetKeyDown(KeyCode.Space)){
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
			    		pel.rigidbody.AddForce(Spawn.transform.up * 2000);
			    		proiettileSparato(pel);
			    		GameObject.Find("gun fire").audio.Play();
			    		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
			    	}
				}
			}
			//Spararare
				if(Input.GetKeyDown(KeyCode.Space)){
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
			    		pel.rigidbody.AddForce(Spawn.transform.up * 2000);
			    		proiettileSparato(pel);
			    		GameObject.Find("gun fire").audio.Play();
			    		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
			    	}
				}
		}
}

function OnCollisionEnter(myCol: Collision){
    if(myCol.gameObject.tag == "proiettileNemico"){
       lifeshuttle.attacco = true;
	}
}

function proiettileSparato(oggetto: Transform){
	yield WaitForSeconds(2);
	oggetto.position.z=10000;
}