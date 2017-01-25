#pragma strict
var numProiettili: GUIText; //GUIText dei proiettili
var numCoin: GUIText; //GUIText dei coin
var caric: GameObject;
var caricT: Texture;

var livel: GameObject;
var livelT: Texture;

var adv: GameObject;
var advT: Texture;

function Start () {
	if(PlayerPrefs.GetInt("lvl")==10){
		PlayerPrefs.SetInt("lvl", 10);
	}
	life3.vita=4;
	Time.timeScale = 1;
}

function Update () {
if (PlayerPrefs.GetInt("lingua") == 1){
		caric.guiTexture.texture = caricT;
		livel.guiTexture.texture = livelT;
		adv.guiTexture.texture = advT;
	}
	numProiettili.text = PlayerPrefs.GetInt("bullet").ToString();
	numCoin.text = PlayerPrefs.GetInt("coin").ToString();
	aspetta();
}

function aspetta()
    {
        yield WaitForSeconds(2);
        Application.LoadLevel("lvl3 - Base");
    }