function Update () {
	var dist = Vector3.Distance(this.transform.position, GameObject.Find("testa").transform.position);
	if (dist<1){
		animation.Play();
		GameObject.Find("crash box").audio.Play();
		aspetta();
	}
}

function aspetta()
    {
        yield WaitForSeconds(0.5);
        this.gameObject.SetActive(false);
    }