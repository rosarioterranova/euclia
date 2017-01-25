var lvlLocked: Texture;
var mondoLocked: Texture;

var casa : GameObject; 
var casaT : Texture;
var casaT1 : Texture;
var casaN : GameObject;

var campagna : GameObject;
var campagnaT : Texture;
var campagnaT1 : Texture;
var campagnaN : GameObject;

var porte : GameObject;
var porteT : Texture;
var porteT1 : Texture;
var porteN : GameObject;
  
var fbi : GameObject;
var fbiT : Texture; 
var fbiT1 : Texture; 
var fbiN : GameObject; 
 
var euclia : GameObject;
var eucliaT : Texture;
var eucliaT1 : Texture;
var eucliaN : GameObject;

var egitto : GameObject;
var egittoT : Texture;
var egittoT1 : Texture;
var egittoN : GameObject;

var nilo : GameObject;
var niloT : Texture;
var niloT1 : Texture;
var niloN : GameObject;

var tenda : GameObject;
var tendaT : Texture;
var tendaT1 : Texture;
var tendaN : GameObject;

var sfinge : GameObject;
var sfingeT : Texture;
var sfingeT1 : Texture;
var sfingeN : GameObject;

var piramide : GameObject;
var piramideT : Texture;
var piramideT1 : Texture;
var piramideN : GameObject;

var pharaon : GameObject;
var pharaonT : Texture;
var pharaonT1 : Texture;
var pharaonN : GameObject;

var spazio : GameObject;
var spazioT : Texture;
var spazioT1 : Texture;
var spazioN : GameObject;

var base : GameObject;
var baseT : Texture;
var baseT1 : Texture;
var baseN : GameObject;

var fascia : GameObject;
var fasciaT : Texture;
var fasciaT1 : Texture;
var fasciaN : GameObject;

var marte : GameObject;
var marteT : Texture;
var marteT1 : Texture;
var marteN : GameObject;

var cityfuture : GameObject;
var cityfutureT : Texture;
var cityfutureT1 : Texture;
var cityfutureN : GameObject;

var monster : GameObject;
var monsterT : Texture;
var monsterT1 : Texture;
var monsterN : GameObject;

var medioevo : GameObject;
var medioevoT : Texture;
var medioevoT1 : Texture;
var medioevoN : GameObject;

var foresta : GameObject;
var forestaT : Texture;
var forestaT1 : Texture;
var forestaN : GameObject;

var castello : GameObject;
var castelloT : Texture;
var castelloT1 : Texture;
var castelloN : GameObject;

var assedio : GameObject;
var assedioT : Texture;
var assedioT1 : Texture;
var assedioN : GameObject;

var forte : GameObject;
var forteT : Texture;
var forteT1 : Texture;
var forteN : GameObject;

var drago : GameObject;
var dragoT : Texture;
var dragoT1 : Texture;
var dragoN : GameObject;

function Start () {
	casaN.active = false;
	campagnaN.active = false;
	porteN.active = false;
	fbiN.active = false;
	eucliaN.active = false;
	egittoN.active = false;
	niloN.active = false;
	tendaN.active = false;
	sfingeN.active = false;
	piramideN.active = false;
	pharaonN.active = false;
	spazioN.active = false;
	baseN.active = false;
	fasciaN.active = false;
	marteN.active = false;
	cityfutureN.active = false;
	monsterN.active = false;
	medioevoN.active = false;
	forestaN.active = false;
	castelloN.active = false;
	assedioN.active = false;
	forteN.active = false;
	dragoN.active = false;
}

function Update () {
	if (PlayerPrefs.GetInt("lingua") == 0){
		if(PlayerPrefs.GetInt("lvl")>=0){
			casa.guiTexture.texture = casaT; 
			casaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=1){
			campagna.guiTexture.texture = campagnaT;
			casaN.active = false;
			campagnaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=2){
			porte.guiTexture.texture = porteT;
			campagnaN.active = false;
			porteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=3){
			fbi.guiTexture.texture = fbiT;
			porteN.active = false;
			fbiN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=4){
			euclia.guiTexture.texture = eucliaT;
			fbiN.active = false;
			eucliaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=5){
			egitto.guiTexture.texture = egittoT;
			eucliaN.active = false;
			egittoN.active = true;
			nilo.guiTexture.texture = niloT;
			niloN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=6){
			tenda.guiTexture.texture = tendaT;
			egittoN.active = false;
			niloN.active = false;
			tendaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=7){
			sfinge.guiTexture.texture = sfingeT;
			tendaN.active = false;
			sfingeN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=8){
			piramide.guiTexture.texture = piramideT;
			sfingeN.active = false;
			piramideN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=9){
			pharaon.guiTexture.texture = pharaonT;
			piramideN.active = false;
			pharaonN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=10){
			spazio.guiTexture.texture = spazioT;
			pharaonN.active = false;
			spazioN.active = true;
			base.guiTexture.texture = baseT;
			baseN.active = true;;
		}
		if(PlayerPrefs.GetInt("lvl")>=11){
			fascia.guiTexture.texture = fasciaT;
			spazioN.active = false;
			baseN.active = false;
			fasciaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=12){
			marte.guiTexture.texture = marteT;
			fasciaN.active = false;
			marteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=13){
			cityfuture.guiTexture.texture = cityfutureT;
			marteN.active = false;
			cityfutureN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=14){
			monster.guiTexture.texture = monsterT;
			cityfutureN.active = false;
			monsterN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=15){
			medioevo.guiTexture.texture = medioevoT;
			monsterN.active = false;
			medioevoN.active = true;
			foresta.guiTexture.texture = forestaT;
			forestaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=16){
			castello.guiTexture.texture = castelloT;
			medioevoN.active = false;
			forestaN.active = false;
			castelloN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=17){
			assedio.guiTexture.texture = assedioT;
			castelloN.active = false;
			assedioN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=18){
			forte.guiTexture.texture = forteT;
			assedioN.active = false;
			forteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=19){
			drago.guiTexture.texture = dragoT;
			forteN.active = false;
			dragoN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=20){
			dragoN.active = false;
		}
	}
	
	//ENG
	if (PlayerPrefs.GetInt("lingua") == 1){
		if(PlayerPrefs.GetInt("lvl")>=0){
			casa.guiTexture.texture = casaT1; 
			casaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=1){
			campagna.guiTexture.texture = campagnaT1;
			casaN.active = false;
			campagnaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=2){
			porte.guiTexture.texture = porteT1;
			campagnaN.active = false;
			porteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=3){
			fbi.guiTexture.texture = fbiT1;
			porteN.active = false;
			fbiN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=4){
			euclia.guiTexture.texture = eucliaT1;
			fbiN.active = false;
			eucliaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=5){
			egitto.guiTexture.texture = egittoT1;
			eucliaN.active = false;
			egittoN.active = true;
			nilo.guiTexture.texture = niloT1;
			niloN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=6){
			tenda.guiTexture.texture = tendaT1;
			egittoN.active = false;
			niloN.active = false;
			tendaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=7){
			sfinge.guiTexture.texture = sfingeT1;
			tendaN.active = false;
			sfingeN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=8){
			piramide.guiTexture.texture = piramideT1;
			sfingeN.active = false;
			piramideN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=9){
			pharaon.guiTexture.texture = pharaonT1;
			piramideN.active = false;
			pharaonN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=10){
			spazio.guiTexture.texture = spazioT1;
			pharaonN.active = false;
			spazioN.active = true;
			base.guiTexture.texture = baseT1;
			baseN.active = true;;
		}
		if(PlayerPrefs.GetInt("lvl")>=11){
			fascia.guiTexture.texture = fasciaT1;
			spazioN.active = false;
			baseN.active = false;
			fasciaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=12){
			marte.guiTexture.texture = marteT1;
			fasciaN.active = false;
			marteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=13){
			cityfuture.guiTexture.texture = cityfutureT1;
			marteN.active = false;
			cityfutureN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=14){
			monster.guiTexture.texture = monsterT1;
			cityfutureN.active = false;
			monsterN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=15){
			medioevo.guiTexture.texture = medioevoT1;
			monsterN.active = false;
			medioevoN.active = true;
			foresta.guiTexture.texture = forestaT1;
			forestaN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=16){
			castello.guiTexture.texture = castelloT1;
			medioevoN.active = false;
			forestaN.active = false;
			castelloN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=17){
			assedio.guiTexture.texture = assedioT1;
			castelloN.active = false;
			assedioN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=18){
			forte.guiTexture.texture = forteT1;
			assedioN.active = false;
			forteN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=19){
			drago.guiTexture.texture = dragoT1;
			forteN.active = false;
			dragoN.active = true;
		}
		if(PlayerPrefs.GetInt("lvl")>=20){
			dragoN.active = false;
		}
	}
}