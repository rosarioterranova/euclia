#pragma strict
var personaggio: GameObject;


function Start () {
}

function Update () {

	var dist = Vector3.Distance(personaggio.transform.position, this.transform.position);
	if (dist<1){
		PlayerPrefs.SetInt("coin",PlayerPrefs.GetInt("coin")+1);
		this.gameObject.SetActive(false);
		GameObject.Find("coinSound").audio.Stop();
		GameObject.Find("coinSound").audio.Play();
	}
}