#pragma strict

//Camera
var cameraMain : Camera;
var zposition : float;
var yposition : float;

//variabili di forza
var velocitaCorsa: float = 5;
var forzaSalto: float = 8;
var ruotato : boolean = false; //controlla se è ruotato in altra posizione
var puntoSalto : float;	//fa saltare il personaggio solo se questa variabile è uguale alla posizione del suolo
var saltato : boolean = false; //controlla se è in salto

//variabili dei bottoni touch
var left : GUITexture; //bottone touch
var right : GUITexture; //bottone touch
var vjump : GUITexture; //bottone touch
var vgun : GUITexture; //bottone touch

//variabili degli oggetti
var pist: GameObject; //oggetto pistola
var correndo : boolean = false; //controlla se sta camminando
var Bullet : Transform; //proiettile
var Spawn : Transform; //spawn proiettile
static var pel : Transform; //clone del proiettile

//Parametri GUI
var numProiettili: GUIText; //GUIText dei proiettili
var numCoin: GUIText; //GUIText dei coin

static var morte : boolean = false; //controlla se è morto

function Start () {
	puntoSalto = transform.position.y; //puntoSalto diventa la posizione attuale del personaggio
	pist.SetActive(false); //inizialmente la pistola è disattivata
	pel = GameObject.Find("proiettile").transform;
}

function Update() {
	
	//Camera
	cameraMain.transform.position.x = this.transform.position.x;
	cameraMain.transform.position.z = zposition;
	if(cameraMain.transform.position.y<this.transform.position.y+1.1){
		cameraMain.transform.position.y = this.transform.position.y+1.1;
		GameObject.Find("outFloor").transform.position.y= this.transform.position.y-5.1;
	}
	
	//Settaggio parametri GUI
	numProiettili.text = PlayerPrefs.GetInt("bullet").ToString(); //mostra nella gui il numero di proiettili totali
	numCoin.text = PlayerPrefs.GetInt("coin").ToString(); //mostra nella gui il numero di coin totali
	
		//Gestione touch
	if (menu.attivaTouch){
		var tapCount = Input.touchCount;
		for ( var i = 0 ; i < tapCount ; i++ ) {
			var touch = Input.GetTouch(i);
			
			//Camminare a destra
			if(touch.phase == TouchPhase.Stationary && right.HitTest(touch.position))
			{
				pist.SetActive(false);
				if (ruotato) {transform.RotateAround(Vector3.up, Mathf.PI); ruotato = false;} //se il personaggio è ruotato a sinistra lo ruota a destra
				if (saltato == false) animation.CrossFade("corsa", 0.2);
				transform.position.x+=velocitaCorsa*Time.deltaTime;
				correndo = true; //notifica che sta camminando
			}
						
			//Camminare a sinistra
			else if(touch.phase == TouchPhase.Stationary && left.HitTest(touch.position))
			{
				pist.SetActive(false);
				if (!ruotato) {transform.RotateAround(Vector3.up, Mathf.PI); ruotato = true;} //se il personaggio è ruotato a destra lo ruota a sinistra
				if (saltato == false)animation.CrossFade("corsa", 0.2);
				transform.position.x-=velocitaCorsa*Time.deltaTime;
				correndo = true; //notifica che sta camminando
			}

			//Salto
			else if(touch.phase == TouchPhase.Stationary && vjump.HitTest(touch.position))
			{
				pist.SetActive(false);
				animation.CrossFade("salto", 0.2);
				if (saltato == false){	
					saltato = true;
					if (transform.position.y<=puntoSalto+1.5)
						rigidbody.AddForce(Vector3.up * forzaSalto, ForceMode.Impulse); //se la posizione attuale è <= del punto iniziale +1.5 salta ancora
					GameObject.Find("jump").audio.Play();
				}
			}
			
			//Spararare
			else if(touch.phase == TouchPhase.Ended && vgun.HitTest(touch.position)){
				pist.SetActive(true);
				if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
				else animation.Play("posaSparo");
				if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
					GameObject.Find("pistola scarica").audio.Play();
				}
				else { //se si hanno proiettili spara
					pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
		    		pel.rigidbody.AddForce(Spawn.transform.right * 2000);
		    		proiettileSparato(pel);
		    		GameObject.Find("gun fire").audio.Play();
		    		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
		    	}
			}
			
			//Azione di default (nessun bottone premuto)
			else{
				if (saltato == false) animation.CrossFade("stand", 0.5);
				pist.SetActive(false);
				correndo = false; //notifica che non sta correndo
			}
		}
	}
	
	//Gestione tasti PC
	if (menu.attivaTasti){
		GameObject.Find("bottoni touch").transform.position.y=4000;
		if(Input.GetKey(KeyCode.LeftArrow)) //spostamento a sinistra
			{
				pist.SetActive(false);
				if (!ruotato) {transform.RotateAround(Vector3.up, Mathf.PI); ruotato = true;} //se il personaggio è ruotato a destra lo ruota a sinistra
				if (saltato == false)animation.CrossFade("corsa", 0.2);
				transform.position.x-=velocitaCorsa*Time.deltaTime;
				correndo = true; //notifica che sta camminando
				if(Input.GetKey(KeyCode.UpArrow)) //salto e spostamento a sinistra
				{
					pist.SetActive(false);
					animation.CrossFade("salto", 0.2);
					if (saltato == false){	
						saltato = true;
						if (transform.position.y<=puntoSalto+1.5)
							rigidbody.AddForce(Vector3.up * forzaSalto, ForceMode.Impulse); //se la posizione attuale è <= del punto iniziale +1.5 salta ancora
						GameObject.Find("jump").audio.Play();
					}
					if(Input.GetKeyDown(KeyCode.Space)){ //sparo e spostamento a sinistra
						pist.SetActive(true);
						if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
						else animation.Play("posaSparo");
						if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
							GameObject.Find("pistola scarica").audio.Play();
						}
						else { //se si hanno proiettili spara
							pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
					    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
					    	proiettileSparato(pel);
					    	GameObject.Find("gun fire").audio.Play();
					    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
					    }
					}
				}
				else if(Input.GetKeyDown(KeyCode.Space)){ //sparo e spostamento a sinistra
					pist.SetActive(true);
					if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
					else animation.Play("posaSparo");
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
				    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
				    	proiettileSparato(pel);
				    	GameObject.Find("gun fire").audio.Play();
				    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
				    }
				}
			}
		else if(Input.GetKey(KeyCode.RightArrow)) //spostamento a destra
			{
				pist.SetActive(false);
				if (ruotato) {transform.RotateAround(Vector3.up, Mathf.PI); ruotato = false;} //se il personaggio è ruotato a sinistra lo ruota a destra
				if (saltato == false) animation.CrossFade("corsa", 0.2);
				transform.position.x+=velocitaCorsa*Time.deltaTime;
				correndo = true; //notifica che sta camminando
				if(Input.GetKey(KeyCode.UpArrow)) //salto e spostamento a destra
				{
					pist.SetActive(false);
					animation.CrossFade("salto", 0.2);
					if (saltato == false){	
						saltato = true;
						if (transform.position.y<=puntoSalto+1.5)
							rigidbody.AddForce(Vector3.up * forzaSalto, ForceMode.Impulse); //se la posizione attuale è <= del punto iniziale +1.5 salta ancora
						GameObject.Find("jump").audio.Play();
					}
					if(Input.GetKeyDown(KeyCode.Space)){ //sparo e spostamento a sinistra
						pist.SetActive(true);
						if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
						else animation.Play("posaSparo");
						if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
							GameObject.Find("pistola scarica").audio.Play();
						}
						else { //se si hanno proiettili spara
							pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
					    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
					    	proiettileSparato(pel);
					    	GameObject.Find("gun fire").audio.Play();
					    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
					    }
					}
				}
				else if(Input.GetKeyDown(KeyCode.Space)){ //sparo e spostamento a destra
					pist.SetActive(true);
					if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
					else animation.Play("posaSparo");
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
				    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
				    	proiettileSparato(pel);
				    	GameObject.Find("gun fire").audio.Play();
				    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
				    }
				}
			}
		else if(Input.GetKey(KeyCode.UpArrow)) //salto
			{
				pist.SetActive(false);
				animation.CrossFade("salto", 0.2);
				if (saltato == false){	
					saltato = true;
					if (transform.position.y<=puntoSalto+1.5)
						rigidbody.AddForce(Vector3.up * forzaSalto, ForceMode.Impulse); //se la posizione attuale è <= del punto iniziale +1.5 salta ancora
					GameObject.Find("jump").audio.Play();
				}
				else if(Input.GetKeyDown(KeyCode.Space)){ //sparo e salto
					pist.SetActive(true);
					if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
					else animation.Play("posaSparo");
					if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
						GameObject.Find("pistola scarica").audio.Play();
					}
					else { //se si hanno proiettili spara
						pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
				    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
				    	proiettileSparato(pel);
				    	GameObject.Find("gun fire").audio.Play();
				    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
				    }
				}
			}
		else if(Input.GetKeyDown(KeyCode.Space)){ //sparo
			pist.SetActive(true);
			if (correndo) animation.Play("sparoInCorsa"); //se sta già camminando spara in corsa
			else animation.Play("posaSparo");
			if (PlayerPrefs.GetInt("bullet") == 0){ //se non si hanno proiettili non sparare
				GameObject.Find("pistola scarica").audio.Play();
			}
			else { //se si hanno proiettili spara
				pel = Instantiate(Bullet, Spawn.position, Bullet.rotation);
		    	pel.rigidbody.AddForce(Spawn.transform.right * 2000);
		    	proiettileSparato(pel);
		    	GameObject.Find("gun fire").audio.Play();
		    	PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")-1); //togli un proiettile dalla gui
		    }
		}
		else{ //azione di default
				if (saltato == false) animation.CrossFade("stand", 0.5);
				pist.SetActive(false);
				correndo = false; //notifica che non sta correndo
			}
	}
}

//Collisione con il percorso o con gli ostacoli
function OnCollisionEnter(myCol: Collision){
    if(myCol.gameObject.tag == "percorso" || myCol.gameObject.tag == "ostacolo" || myCol.gameObject.tag == "proiettile"){
       pist.SetActive(false);
       puntoSalto = transform.position.y; //punto salto diventa l'ostacolo, permettendo di saltare sopra l'ostacolo o un percorso alto
       animation.CrossFade("stand", 0.5);
       saltato = false; //notifica che non è in salto
	}
	if(myCol.gameObject.tag == "out"){
       GameObject.Find("WilhelmScream").audio.Play();
       GameObject.Find("Rick Arciere (Controller)").SetActive(false);
       Time.timeScale = 0;
       morte = true;
	}
}

function proiettileSparato(oggetto: Transform){
	yield WaitForSeconds(2);
	oggetto.position.z=10000;
}