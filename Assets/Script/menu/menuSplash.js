function Start () {
	//PlayerPrefs.DeleteAll();
	aspetta();
}

function Update () {

}

function aspetta()
    {
        yield WaitForSeconds(3);
        if (PlayerPrefs.HasKey("MySetting") == false) Application.LoadLevel("menu - selezione lingua");
		else Application.LoadLevel("menu");
    }