#pragma strict
var velocitaNuvola: float;

function Start () {

}

function Update () {
	transform.position.x-=velocitaNuvola*Time.deltaTime;
}