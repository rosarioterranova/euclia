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
		GameObject.Find("grugnito").audio.Stop();
		GameObject.Find("grugnito").audio.Play();
		GameObject.Find("Rick Egizio (Controller)").rigidbody.AddForce(Vector3.up * 2, ForceMode.Impulse);
		if(vita==1) {life.guiTexture.texture = life0; vita-=1; attacco = false;}
		if(vita==2) {life.guiTexture.texture = life1; vita-=1; attacco = false;}
		if(vita==3) {life.guiTexture.texture = life2; vita-=1; attacco = false;}
		if(vita==4) {life.guiTexture.texture = life3; vita-=1; attacco = false;}
		if(vita==0){
			GameObject.Find("grugnito").audio.Stop();
			GameObject.Find("WilhelmScream").audio.Play();
			GameObject.Find("Rick Egizio (Controller)").transform.position.z=1000;
			Time.timeScale = 0;
			rick.morte = true;
		}
	}
}