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

static var pronto : boolean = false;

var insieme1: GameObject;
var insieme2: GameObject;
var insieme3: GameObject;
var insieme4: GameObject;
var insieme5: GameObject;

var vitaPha : int = 40;

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

static var completato : boolean = false;

function Start () {
	insieme1.SetActive(false);
	insieme2.SetActive(false);
	insieme3.SetActive(false);
	insieme4.SetActive(false);
	insieme5.SetActive(false);
}

function Update () {

	//Inizio
	var dist = Vector3.Distance(GameObject.Find("pharaoh").transform.position, GameObject.Find("Rick Egizio (Controller)").transform.position);
	if(dist<15 &&(!inizio)) {
		GameObject.Find("lvl2").audio.Stop();
		if(!audioSabbia) {GameObject.Find("sabbia").audio.Play(); audioSabbia=true;}
		GameObject.Find("pharaoh").transform.Translate(Vector3.up*Time.deltaTime);
		fLife.SetActive(true);
		aspettaInizio();
	}
	
	//Apparizioni insiemi
	if(insieme1attivo){
		pronto = true;
		insieme1.SetActive(true);
		insieme1.transform.position.x=GameObject.Find("pharaoh").transform.position.x;
		insieme1.transform.position.y=5;
		if(!audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=true;}
		aspettaSpawn1();
	}
	if(insieme2attivo){
		insieme2.SetActive(true);
		insieme2.transform.position.x=GameObject.Find("pharaoh").transform.position.x;
		insieme2.transform.position.y=7;
		if(audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=false;}
		if(audioRisata) {GameObject.Find("risata").audio.Play(); audioRisata=false;}
		aspettaSpawn2();
	}
	if(insieme3attivo){
		insieme3.SetActive(true);
		insieme3.transform.position.x=GameObject.Find("pharaoh").transform.position.x;
		insieme3.transform.position.y=7;
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


function OnCollisionEnter(myCol: Collision){ //se collide con un proiettile lo fa rimbalzare
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
				GameObject.Find("lvl2").audio.Play();
				this.active = false;
				GameObject.Find("doh").audio.Play();
				completato = true;
				Time.timeScale = 0;
			}
			if(vitaPha==36) lifeF.guiTexture.texture = lifeF9;
			if(vitaPha==32) lifeF.guiTexture.texture = lifeF8;
			if(vitaPha==28) lifeF.guiTexture.texture = lifeF7;
			if(vitaPha==24) lifeF.guiTexture.texture = lifeF6;
			if(vitaPha==20) lifeF.guiTexture.texture = lifeF5;
			if(vitaPha==16) lifeF.guiTexture.texture = lifeF4;
			if(vitaPha==12) lifeF.guiTexture.texture = lifeF3;
			if(vitaPha==8) lifeF.guiTexture.texture = lifeF2;
			if(vitaPha==4) lifeF.guiTexture.texture = lifeF1;
			if(vitaPha==0) lifeF.guiTexture.texture = lifeF0;
		}
	}
	else if(myCol.gameObject.tag == "protagonista"){
		if (attaccato == false)	{
			life2.attacco = true;
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