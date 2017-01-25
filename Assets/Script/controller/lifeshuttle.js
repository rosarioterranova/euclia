#pragma strict
static var attacco = false;
static var vita : int = 4;
var life0 : Texture;
var life1 : Texture;
var life2 : Texture;  
var life3 : Texture;  
var life4 : Texture;
var life : GameObject; 

function Start () {	
}

function Update () {	
	if(vita==1) life.guiTexture.texture = life1;
	if(vita==2) life.guiTexture.texture = life2;
	if(vita==3) life.guiTexture.texture = life3;
	if(vita==4) life.guiTexture.texture = life4;

	if(attacco == true){
		GameObject.Find("car crash").audio.Stop();
		GameObject.Find("car crash").audio.Play();
		if(vita==1) {life.guiTexture.texture = life0; vita-=1; attacco = false;}
		if(vita==2) {life.guiTexture.texture = life1; vita-=1; attacco = false;}
		if(vita==3) {life.guiTexture.texture = life2; vita-=1; attacco = false;}
		if(vita==4) {life.guiTexture.texture = life3; vita-=1; attacco = false;}
		if(vita==0){
			GameObject.Find("WilhelmScream").audio.Play();
			GameObject.Find("shuttle").transform.position.z=1000;
			Time.timeScale = 0;
			shuttle.morte = true;
		}
	}
}