#pragma strict

var morto: GameObject;
var mortoT: Texture;

var riprova: GameObject;
var riprovaT: Texture;

var pausa: GameObject;
var pausaT: Texture;

var riprendi: GameObject;
var riprendiT: Texture;

var completato: GameObject;
var completatoT: Texture;

var prossimo: GameObject;
var prossimoT: Texture;

function Start () {

}

function Update () {
		if (PlayerPrefs.GetInt("lingua") == 1){
			morto.guiTexture.texture = mortoT;
			riprova.guiTexture.texture = riprovaT;
			pausa.guiTexture.texture = pausaT;
			riprendi.guiTexture.texture = riprendiT;
			completato.guiTexture.texture = completatoT;
			prossimo.guiTexture.texture = prossimoT;
	}
}