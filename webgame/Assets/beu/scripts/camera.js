#pragma strict

var player : GameObject;
var _GUI : GameObject;

function Update () {

	lookAt();
	
	if(player == null){
		restartLvl();
	}
	
	_GUI.gameObject.transform.position = new Vector3(transform.position.x + 1.5, transform.position.y, transform.position.z);

}

function lookAt(){

	transform.position.x = player.transform.position.x;
	
	if(Application.loadedLevel == 2){
		
		transform.position.x = -11.56857;
		transform.position.y = player.transform.position.y + 3;
		transform.position.z = player.transform.position.z;
	
	}

}

function restartLvl(){

	 Application.LoadLevel(0);

}