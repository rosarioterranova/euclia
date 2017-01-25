#pragma strict
var inizio : boolean = false;
var insieme1attivo : boolean = false;
var insieme2attivo : boolean = false;
var insieme3attivo : boolean = false;
var insieme4attivo : boolean = false;
var insieme5attivo : boolean = false;
var audioSpawn : boolean = false;
var newSpan : boolean = false;
var attaccato : boolean = false;
var mostroSparato : boolean = false;

var pronto : boolean = false;
var su : boolean = true;

var insieme1: GameObject;
var insieme2: GameObject;
var insieme3: GameObject;
var insieme4: GameObject;
var insieme5: GameObject;

var vitaPha : int = 60;

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
	if(!inizio){
		GameObject.Find("monsterUP").transform.Translate(Vector3.left*Time.deltaTime);
		GameObject.Find("monsterDOWN").transform.Translate(Vector3.left*Time.deltaTime);
		aspettaInizio();
	}
	
	if(pronto){
		if(!su){
			GameObject.Find("monsterUP").transform.Translate(Vector3.down*Time.deltaTime);
			GameObject.Find("monsterDOWN").transform.Translate(Vector3.down*Time.deltaTime);
			aspettaSposta2();
		}
		if(su){
			GameObject.Find("monsterUP").transform.Translate(Vector3.up*Time.deltaTime);
			GameObject.Find("monsterDOWN").transform.Translate(Vector3.up*Time.deltaTime);
			aspettaSposta();
		}
	}
	
	if(pronto && mostroSparato == false){
		var position: Vector3 = Vector3(3, Random.Range(-5, 5), 0);
		var pal = Instantiate(GameObject.Find("proiettileM").transform, position, Quaternion.identity);
		GameObject.Find("gun fire").audio.Play();
		pal.rigidbody.AddForce(transform.right * -800); //energia dello sparo
		proiettileSparato(pal);
		mostroSparato = true;
		aspettaMostro();
	}
	
	//Apparizioni insiemi
	if(insieme1attivo){
		pronto=true;
		insieme1.SetActive(true);
		if(!audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=true;}
		aspettaSpawn1();
	}
	if(insieme2attivo){
		insieme2.SetActive(true);
		if(audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=false;}
		aspettaSpawn2();
	}
	if(insieme3attivo){
		insieme3.SetActive(true);
		if(!audioSpawn) {GameObject.Find("spaw").audio.Play(); audioSpawn=true;}
		aspettaSpawn3();
	}
}

function aspettaInizio(){
        yield WaitForSeconds(8);
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
function aspettaMostro(){
	yield WaitForSeconds(2);
	mostroSparato = false;
}


function OnCollisionEnter(myCol: Collision){ //se collide con un proiettile lo fa rimbalzare
    if(myCol.gameObject.tag == "proiettile"){
    	shuttleX.pel.transform.position.z=20000;
		GameObject.Find("grunt").audio.Stop();
		vitaPha-=1;
		GameObject.Find("grunt").audio.Play();
		if (vitaPha<=0) {
			GameObject.Find("spaw").audio.Stop();
			GameObject.Find("grunt").audio.Stop();
			GameObject.Find("tension").audio.Stop();
			GameObject.Find("monsterDOWN").active=false;
			this.active = false;
			GameObject.Find("doh").audio.Play();
			completato = true;
			Time.timeScale = 0;
		}
		if(vitaPha==54) lifeF.guiTexture.texture = lifeF9;
		if(vitaPha==48) lifeF.guiTexture.texture = lifeF8;
		if(vitaPha==42) lifeF.guiTexture.texture = lifeF7;
		if(vitaPha==36) lifeF.guiTexture.texture = lifeF6;
		if(vitaPha==30) lifeF.guiTexture.texture = lifeF5;
		if(vitaPha==24) lifeF.guiTexture.texture = lifeF4;
		if(vitaPha==18) lifeF.guiTexture.texture = lifeF3;
		if(vitaPha==12) lifeF.guiTexture.texture = lifeF2;
		if(vitaPha==6) lifeF.guiTexture.texture = lifeF1;
		if(vitaPha==0) lifeF.guiTexture.texture = lifeF0;
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
 function aspettaSposta()
    {
        yield WaitForSeconds(5);
        su=false;
    }
 function aspettaSposta2()
    {
        yield WaitForSeconds(10);
        su=true;
    }   
function proiettileSparato(oggetto: Transform){
	yield WaitForSeconds(2);
	oggetto.position.z=10000;
}