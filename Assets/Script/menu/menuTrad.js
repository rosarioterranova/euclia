var play: GameObject;
var playT: Texture;

var exit: GameObject;
var exitT: Texture;

var videogame: GameObject;
var videogameT: Texture;

var vota: GameObject;
var votaT: Texture;

var imp: GameObject;
var impT: Texture;

var delete: GameObject;
var deleteT: Texture;

var yes: GameObject;
var yesT: Texture;

var lang: GameObject;
var langT: Texture;

var world: GameObject;
var worldT: Texture;

var world2: GameObject;
var world2T: Texture;

var level1: GameObject;
var level1T: Texture;

var level2: GameObject;
var level2T: Texture;

var level3: GameObject;
var level3T: Texture;

var level4: GameObject;
var level4T: Texture;

var website: GameObject;
var websiteT: Texture;

var presente: GameObject;
var presenteT: Texture;

var newLVL1: GameObject;
var newLVL1T: Texture;

var newLVL2: GameObject;
var newLVL2T: Texture;

function Update() {
	if (PlayerPrefs.GetInt("lingua") == 1){
		play.guiTexture.texture = playT;
		exit.guiTexture.texture = exitT;
		videogame.guiTexture.texture = videogameT;
		vota.guiTexture.texture = votaT;
		imp.guiTexture.texture = impT;
		delete.guiTexture.texture = deleteT;
		yes.guiTexture.texture = yesT;
		lang.guiTexture.texture = langT;
		world.guiTexture.texture = worldT;
		world2.guiTexture.texture = world2T;
		website.guiTexture.texture = websiteT;
		presente.guiTexture.texture = presenteT;
		level1.guiTexture.texture = level1T;
		level2.guiTexture.texture = level2T;
		level3.guiTexture.texture = level3T;
		level4.guiTexture.texture = level4T;
		newLVL1.guiTexture.texture = newLVL1T;
		newLVL2.guiTexture.texture = newLVL2T;
	}
}