#pragma strict

var gameMode : int;
var index : int;
var lives : int;
var timer : int;

var livesTxt : TextMesh;
var winTxt : TextMesh;

var speed : float;
var jumpSpeed : float;
var gravity : float;
var rotLeftRight : float;
var movementSpeed : float = 5.0f;
var moveSen : float = 3.0f;
var verticalRotation : float = 0;
var upDownRange : float = 60.0f;
var verticalVelocity : float = 0;
var forwardSpeed : float;
var sideSpeed : float;

var deathBool : boolean;
var isGrounded : boolean;
var winGame : boolean;

var menuScr : menu;

var spawnPoint : GameObject;

private var moveDirection : Vector3 = Vector3.zero;


function Start(){
	index = 1;
	lives = 3;
	deathBool = false;
	isGrounded = false;
	winGame = false;
	winTxt.gameObject.SetActive(false);
}

function Update () {

	if(deathBool){
	
		death();
	
	}
	
	if(winGame){
	
		win();
	
	}
	
	//GameMode 2 = FPS GUI
	if(Application.loadedLevelName == "FPS" + index){
		gameMode = 2;
		livesTxt.text = "Ammo";
	}
	
	//GameMode 3 = Platformer GUI
	if(Application.loadedLevelName == "platformer-" + index){
		gameMode = 3;
		livesTxt.text = "Lives: " + lives;
	}
	
		//GameMode Controls
	switch(gameMode){
		
		case 1:
			
			carMovement();
			
		break;
		
		case 2:
		
			fpsMovement();
		
		break;
		
		case 3:
		
			platformerMovement();
		
		break;
	
	}
	
}

function OnCollisionStay (){
	
		isGrounded = true;

}

function OnCollisionExit (){

	
		isGrounded = false;

}

function OnTriggerEnter (other : Collider){

	if(other.tag == "death"){
	
		deathBool = true;
	
	}
	
	if(other.tag == "flagWin"){
	
		winGame = true;
	
	}

}

function carMovement(){	

}

function fpsMovement(){

}

function platformerMovement(){	

	moveDirection = Vector3( 0,0, -Input.GetAxis("Horizontal"));
	
	speed = 3.5f;
	GetComponent.<Rigidbody>().MovePosition(GetComponent.<Rigidbody>().position + moveDirection * speed * Time.deltaTime);
	
	jumpSpeed = 8;
	
	if(Input.GetButtonDown("A") && isGrounded){
			
			GetComponent.<Rigidbody>().velocity.y = jumpSpeed;
	}
		
}

function death(){

	if(deathBool){
		
		GetComponent.<Rigidbody>().position = spawnPoint.transform.position;
		lives--;
		deathBool = !deathBool;
		
	}

}

function win(){
	
	Application.LoadLevel("menu");

}