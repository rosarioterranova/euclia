function Start () {
	aspetta();
}

function Update () {
	GameObject.Find("credits").transform.position.y+=0.5*Time.deltaTime;
}

function aspetta()
    {
        yield WaitForSeconds(80);
		Application.LoadLevel("menu");
    }