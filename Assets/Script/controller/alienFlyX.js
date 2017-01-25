#pragma strict
var nemici : GameObject[]; //array dei nemici
var piediPersonaggio: GameObject; //piedi del personaggio

function Start () {
}

function Update() {
	nemici = GameObject.FindGameObjectsWithTag("AlienFly");
	for (var j = 0; j < nemici.length; j++) { 
		
		//Morte del nemico per proiettile
		var dista = Vector3.Distance(shuttleX.pel.position, nemici[j].transform.position);
		if (dista<1){
			nemici[j].gameObject.transform.position.z=100;
			nemici[j].gameObject.SetActive(false);
			GameObject.Find("enemy death").audio.Play();
			shuttleX.pel.transform.position.z=20000;
		}
	}
}