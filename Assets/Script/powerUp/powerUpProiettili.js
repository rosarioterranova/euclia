#pragma strict
var personaggio: GameObject;

function Start () {
}

function Update () {

	var dist = Vector3.Distance(personaggio.transform.position, this.transform.position);
	if (dist<1.5){
		PlayerPrefs.SetInt("bullet", PlayerPrefs.GetInt("bullet")+5); //powerup da 5
		this.gameObject.SetActive(false);
		GameObject.Find("gun reload").audio.Play();
	}
}