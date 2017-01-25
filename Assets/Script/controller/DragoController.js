#pragma strict
var inizio : boolean = false;
var insieme1attivo : boolean = false;
var insieme2attivo : boolean = false;
var insieme3attivo : boolean = false;
var insieme4attivo : boolean = false;
var insieme5attivo : boolean = false;
var audioSabbia : boolean = false;
var audioSpawn : boolean = false;
var audioRisata : boolean = false;
var audioTension : boolean = false;
var newSpan : boolean = false;
var attaccato : boolean = false;

var fuoco: GameObject;
var fuocoAttivo : boolean = false;

static var pronto : boolean = false;

var insieme1: GameObject;
var insieme2: GameObject;
var insieme3: GameObject;
var insieme4: GameObject;
var insieme5: GameObject;

var vitaPha : int = 80;

var countLoc: int = 0;

var fLife: GameObject;
var lifeF : GameObject;
var lifeF9 : Texture;
var lifeF8 : Texture;
var lifeF7 : Texture;
var lifeF6 : Texture;
var lifeF5 : Texture;
var lifeF4 : Texture;
var lifeF3 : Texture;
var lifeF2 : Texture;
var lifeF1 : Texture;
var lifeF0 : Texture;

var sbattuto : boolean = false; //controlla se il nemico sbatte su un'ostacolo

static var completato : boolean = false;

function Start () {
	fuoco.SetActive(false);
	insieme1.SetActive(false);
	insieme2.SetActive(false);
	insieme3.SetActive(false);
	insieme4.SetActive(false);
	insieme5.SetActive(false);
}

function Update () {
	
	if(pronto){
		//Movimento drago
		if (sbattuto==false){	
			this.transform.position.x-=3*Time.deltaTime; //va a sinistra
		}
		else{
			this.transform.position.x+=3*Time.deltaTime; //va a destra
		}
	}
	
	//Inizio
	if(!inizio) {
		GameObject.Find("dragon").transform.Translate(Vector3.down*Time.deltaTime);
		fLife.SetActive(true);
		aspettaInizio();
	}
	
	if(fuocoAttivo == false){
		aspettaFuoco();
	}
	
	//Apparizioni insiemi
	if(insieme1attivo){
		pronto = true;
		insieme1.SetActive(true);
		insieme1.transform.position.y=1;
		if(!audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=true;}
		aspettaSpawn1();
	}
	if(insieme2attivo){
		insieme2.SetActive(true);
		insieme2.transform.position.y=1;
		if(audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=false;}
		if(audioRisata) {GameObject.Find("risata").audio.Play(); audioRisata=false;}
		aspettaSpawn2();
	}
	if(insieme3attivo){
		insieme3.SetActive(true);
		insieme3.transform.position.y=1;
		if(!audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=true;}
		if(!audioRisata) {GameObject.Find("risata").audio.Play(); audioRisata=true;}
		aspettaSpawn3();
	}
}

function aspettaInizio(){
		if(!audioRisata) {GameObject.Find("risata").audio.Play(); audioRisata=true;}
        yield WaitForSeconds(7.5);
        if(!audioTension){GameObject.Find("tension").audio.Play(); audioTension=true;}
        inizio = true;
        insieme1attivo = true;  
}

function aspettaSpawn1(){
	insieme1attivo = false;
	yield WaitForSeconds(15);
	insieme2attivo = true;
}
function aspettaSpawn2(){
	insieme2attivo = false;
	yield WaitForSeconds(15);
	insieme3attivo = true;
}
function aspettaSpawn3(){
	insieme3attivo = false;
	yield WaitForSeconds(15);
	insieme4attivo = true;
}

function aspettaFuoco(){
	yield WaitForSeconds(5);
	fuocoAttivo = true;
	fuoco.SetActive(true);
	yield WaitForSeconds(15);
	fuoco.SetActive(false);
	yield WaitForSeconds(5);
	fuocoAttivo = false;
}


function OnCollisionEnter(myCol: Collision){ //se collide con un proiettile lo fa rimbalzare
	if(myCol.gameObject.tag == "ostacolo"){
		transform.RotateAround(Vector3.up, Mathf.PI);
		if (sbattuto == false) sbattuto = true;
		else if (sbattuto == true) sbattuto = false;
	}
    if(myCol.gameObject.tag == "proiettile"){
    	rick.pel.transform.position.z=20000;
		if(pronto){
			GameObject.Find("grunt").audio.Stop();
			vitaPha-=1;
			GameObject.Find("grunt").audio.Play();
			if (vitaPha<=0) {
				GameObject.Find("spaw").audio.Stop();
				GameObject.Find("risata").audio.Stop();
				GameObject.Find("tension").audio.Stop();
				GameObject.Find("grunt").audio.Stop();
				GameObject.Find("dragonSound").audio.Stop();
				this.active = false;
				GameObject.Find("doh").audio.Play();
				completato = true;
				Time.timeScale = 0;
			}
			if(vitaPha==72) lifeF.guiTexture.texture = lifeF9;
			if(vitaPha==64) lifeF.guiTexture.texture = lifeF8;
			if(vitaPha==56) lifeF.guiTexture.texture = lifeF7;
			if(vitaPha==48) lifeF.guiTexture.texture = lifeF6;
			if(vitaPha==40) lifeF.guiTexture.texture = lifeF5;
			if(vitaPha==32) lifeF.guiTexture.texture = lifeF4;
			if(vitaPha==24) lifeF.guiTexture.texture = lifeF3;
			if(vitaPha==16) lifeF.guiTexture.texture = lifeF2;
			if(vitaPha==8) lifeF.guiTexture.texture = lifeF1;
			if(vitaPha==0) lifeF.guiTexture.texture = lifeF0;
		}
	}
	if(myCol.gameObject.tag == "protagonista"){
		if (attaccato == false)	{
			life4.attacco = true;
			attaccato = true;
		}
		else {
			aspetta();
		}
	}
}

function aspetta()
    {
        yield WaitForSeconds(2);
        attaccato = false;
    }