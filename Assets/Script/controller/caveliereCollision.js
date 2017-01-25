var sbattuto : boolean = false; //controlla se il nemico sbatte su un'ostacolo
var attaccato : boolean = false;
var velocita: float;

function Start(){
	this.transform.RotateAround(Vector3.up, Mathf.PI);
}

function Update(){
		//Movimento nemici
		var distaProta = Vector3.Distance(GameObject.Find("testa").transform.position, this.transform.position);
		if (sbattuto==false){	
			this.transform.position.x-=velocita*Time.deltaTime; //va a sinistra
		}
		else{
			this.transform.position.x+=velocita*Time.deltaTime; //va a destra
		}
		
		//Se c'è il vuoto torna indietro
		var limiti : GameObject[];
		limiti = GameObject.FindGameObjectsWithTag("Limite Vuoto");
		for (var j = 0; j < limiti.length; j++) { 
    		var distFinish = Vector3.Distance(limiti[j].transform.position, this.transform.position);
    		if (distFinish<0.5){
				this.transform.RotateAround(Vector3.up, Mathf.PI);
				if (sbattuto == false) sbattuto = true;
				else if (sbattuto == true) sbattuto = false;  		
    		}
		}
}

function OnCollisionEnter(myCol: Collision){ //se collide con un ostacolo torna indietro
    if(myCol.gameObject.tag == "ostacolo" || myCol.gameObject.tag == "Limite Vuoto"){
		this.transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
	}
	else if (myCol.gameObject.tag == "Cavaliere" || myCol.gameObject.tag == "Wolf"){ //se collide con un altro anubi torna indietro
		this.transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
	}
	else if(myCol.gameObject.tag == "protagonista"){ //se collide con il protagonista attacca
		if (attaccato == false)	{
			life4.attacco = true;
			attaccato = true;
		}
		else {
			aspetta();
		}
	}
	else if (myCol.gameObject.tag == "protagonistaCavallo"){ //se collide con un altro anubi torna indietro
		life4.attacco = true;
		GameObject.Find("grugnito").audio.Play();
		this.gameObject.transform.position.z=100;
		this.gameObject.SetActive(false);
	}
}

function aspetta()
    {
        yield WaitForSeconds(2);
        attaccato = false;
    }