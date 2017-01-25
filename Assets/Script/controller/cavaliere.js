#pragma strict
var nemici : GameObject[]; //array dei nemici
var piediPersonaggio: GameObject; //piedi del personaggio

function Start () {
	nemici = GameObject.FindGameObjectsWithTag("Cavaliere");
}

function Update() {
	for (var j = 0; j < nemici.length; j++) { 

		//Morte del nemico per salto del protagonista
		var dist = Vector3.Distance(piediPersonaggio.transform.position, nemici[j].transform.transform.position);
		if (dist<2){
			nemici[j].gameObject.transform.position.z=100;
			nemici[j].gameObject.SetActive(false);
			GameObject.Find("enemy death").audio.Play();
			GameObject.Find("Rick Arciere (Controller)").rigidbody.AddForce(Vector3.up * 8, ForceMode.Impulse);
		}
		
		//Morte del nemico per proiettile
		var dista = Vector3.Distance(rick.pel.position, nemici[j].transform.position);
		if (dista<2){
			nemici[j].gameObject.transform.position.z=100;
			nemici[j].gameObject.SetActive(false);
			GameObject.Find("enemy death").audio.Play();
		}
	}
}