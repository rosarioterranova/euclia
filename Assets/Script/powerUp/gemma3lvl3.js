﻿#pragma strict
var personaggio: GameObject;

function Start () {
	if(PlayerPrefs.GetInt("gemma3lvl3")==1) this.gameObject.SetActive(false); 
}

function Update () {

	var dist = Vector3.Distance(personaggio.transform.position, this.transform.position);
	if (dist<1.5){
		PlayerPrefs.SetInt("gemma3lvl3", 1);
		GameObject.Find("takegem").audio.Play();
		this.gameObject.SetActive(false);
	}
}