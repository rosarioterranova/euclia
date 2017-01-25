#pragma strict
var nemici : GameObject[];
var piediPersonaggio: GameObject;

function Start () {
	nemici = GameObject.FindGameObjectsWithTag("Locust");
}

function Update() {
	for (var j = 0; j < nemici.length; j++) { 
	
		//Morte del nemico per salto del protagonista
		var dist = Vector3.Distance(piediPersonaggio.transform.position, nemici[j].transform.position);
		if (dist<1){
			nemici[j].gameObject.transform.position.z=100;
			nemici[j].gameObject.SetActive(false);
			GameObject.Find("enemy death").audio.Play();
			GameObject.Find("Rick Egizio (Controller)").rigidbody.AddForce(Vector3.up * 8, ForceMode.Impulse);
		}

		//Morte del nemico per proiettile
		var dista = Vector3.Distance(rickY.pel.position, nemici[j].transform.position);
		if (dista<1){
			nemici[j].gameObject.transform.position.z=100;
			nemici[j].gameObject.SetActive(false);
			GameObject.Find("enemy death").audio.Play();
		}
	}
}