#pragma strict
var personaggio: GameObject;

function Start () {
}

function Update () {
	var dist = Vector3.Distance(personaggio.transform.position, this.transform.position);
	if (dist<1.5){
		life.vita = 4; //full life
		life2.vita = 4; //full life
		life3.vita = 4; //full life
		life4.vita = 4; //full life
		lifeshuttle.vita = 4;
		this.gameObject.SetActive(false);
		GameObject.Find("cura").audio.Play();
	}
}