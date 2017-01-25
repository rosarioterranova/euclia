﻿var sbattuto : boolean = false; //controlla se il nemico sbatte su un'ostacolo
var attaccato : boolean = false;

function Update(){
		//Movimento nemici
		var distaProta = Vector3.Distance(GameObject.Find("testa").transform.position, this.transform.position);
		if (sbattuto==false){	
			this.transform.position.x-=4*Time.deltaTime; //va a sinistra
		}
		else{
			this.transform.position.x+=4*Time.deltaTime; //va a destra
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
    if(myCol.gameObject.tag == "ostacolo" || myCol.gameObject.tag == "Anubi"){
		this.transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
	}
	else if (myCol.gameObject.tag == "protagonista"){ //se collide con il protagonista attacca e torna indietro
		this.transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
		if (attaccato == false)	{
			life2.attacco = true;
			attaccato = true;
		}
		else {
			aspetta();
		}
	}
	else if (myCol.gameObject.tag == "Anubi" || myCol.gameObject.tag == "Locust"){ //se collide con un altra locusta torna indietro
		this.transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
	}
	else if(myCol.gameObject.tag == "percorso"){ //se collide con il percorso salta
       		this.rigidbody.velocity = Vector3(0,4,0);
	}
}

function aspetta()
    {
        yield WaitForSeconds(2);
        attaccato = false;
    }