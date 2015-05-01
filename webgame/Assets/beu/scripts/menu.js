#pragma strict

var menuChose : int;
var timer : int;
var timerMax : int;

public var obj_menu : GameObject;
public var obj_platFormer : GameObject;
public var obj_car : GameObject;
public var obj_FPS : GameObject;
var startMenu : GameObject;
var menuScrn : GameObject;
public var _GUI : GameObject;

public var carRaceTxt : TextMesh;
public var fpsBtnTxt : TextMesh;
public var platformerTxt : TextMesh;
public var creditTxt : TextMesh;
public var credit2Txt : TextMesh;
public var devTxt : TextMesh;
public var livesTxt : TextMesh;
public var winTxt : TextMesh;
var testTxt : TextMesh;

public var fullScreen : GUITexture;
var menuBG : GUITexture;
var resumeBtn : GUITexture;
var optionBtn : GUITexture;
var quitBtn : GUITexture;

var menuBtn : Texture2D;
var pressedmenuBtn : Texture2D;

var resumeTxt : GUIText;
var optionTxt : GUIText;
var quitTxt : GUIText;

var isFullScreen : boolean;
var menuBool : boolean;
var testMode : boolean;


function Start () {

	menuChose = 0;
	timer = 0;
	timerMax = 25;
	isFullScreen = false;
	menuBool = false;
	startMenu.SetActive(false);
	menuScrn.SetActive(false);
	
	resumeTxt.text = "Resume";
	optionTxt.text = "Option";
	quitTxt.text = "Quit";
	
	testMode = false;
	testTxt.gameObject.SetActive(false);
	
}

function Update () {

	TM();
	
	menuControls();
	
	if(timer != 0){	
		timer = timer -1 * Time.deltaTime;
		
	}
	
	if(testMode){
     	 testTxt.text = menuChose.ToString();
     	 testTxt.gameObject.SetActive(true);		
	}

}

function menuControls(){
		
		if(Application.loadedLevel == 0){
		
		
	if(timer == 0){
		timer = 0;
	}
		
	if(Input.GetAxis("Vertical") < 0 && timer == 0){	
		menuChose++;
		timer = timerMax;
		
	}
		
	if(Input.GetAxis("Vertical") > 0 && timer == 0){	
		menuChose--;
		timer = timerMax;
		
	}
		
	if(menuChose < 0){
		menuChose = 2;
	}
			
	if(menuChose > 2){
		menuChose = 0;
	}
		
		menuScrn.active = true;
		startMenu.active = false;
		
		switch(menuChose){
		
				case 0:
				
					carRaceTxt.color = Color.red;
					fpsBtnTxt.color = Color.black;
					platformerTxt.color = Color.black;
					obj_car.active = true;
					obj_car.transform.Rotate(Vector3.up * 20.0f * Time.deltaTime, Space.Self);
					
					if(Input.GetButton("start")){
		
						Application.LoadLevel(3);
					
					}
				
				break;
				
				case 1:
				
					carRaceTxt.color = Color.black;
					fpsBtnTxt.color = Color.red;
					platformerTxt.color = Color.black;
					obj_car.active = false;
					
					if(Input.GetButton("start")){
		
						Application.LoadLevel(3);
					
					}
				
				break;
				
				case 2:
				
					carRaceTxt.color = Color.black;
					fpsBtnTxt.color = Color.black;
					platformerTxt.color = Color.red;
					obj_car.active = false;
					
					if(Input.GetButton("start")){
		
						Application.LoadLevel(2);
					
					}
				
				break;
		}
		
	} else if (Application.loadedLevel != 0){
	
		menuScrn.active = false;
		
		if(menuBool){
				
			if(timer == 0){
				timer = 0;
			}
				
			if(Input.GetAxisRaw("Vertical") < 0 && timer == 0){	
				menuChose++;
				timer = timerMax;
				
			}
				
			if(Input.GetAxisRaw("Vertical") > 0 && timer == 0){	
				menuChose--;
				timer = timerMax;
				
			}
			
			if(Input.GetAxisRaw("Vertical") == 0){
				timer = 0;
			}
				
			if(menuChose < 0){
				menuChose = 2;
			}
					
			if(menuChose > 2){
				menuChose = 0;
			}
		
		}
		
	
		if(Input.GetButtonDown("start")){
			
			if(menuBool){
				
				menuBool = false;
			
			} else{
				
				menuBool = true;
			
			}
			
			if (menuBool){
				startMenu.active = true;
				
				
			} else{
				startMenu.active = false;
			}
			
		}

		if(menuBool){
		
			
			Time.timeScale = 0.0;
		
		} else {
		
			
			Time.timeScale = 1.0;	
		
		}
		
				switch(menuChose){
		
				case 0:
	
					resumeTxt.color = Color.gray;
					optionTxt.color = Color.black;
					quitTxt.color = Color.black;
				
				break;
				
				
				case 1:
				
					resumeTxt.color = Color.black;
					optionTxt.color = Color.gray;
					quitTxt.color = Color.black;		
				
				break;
				
				
				case 2:
				
					resumeTxt.color = Color.black;
					optionTxt.color = Color.black;
					quitTxt.color = Color.gray;
				
				break;
		}
		
	}	
}

function TM(){

	carRaceTxt.fontSize = 572;
	carRaceTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	fpsBtnTxt.fontSize = 572;
	fpsBtnTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	platformerTxt.fontSize = 572;
	platformerTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	creditTxt.fontSize = 572;
	creditTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	credit2Txt.fontSize = 572;
	credit2Txt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	devTxt.fontSize = 572;
	devTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	winTxt.fontSize = 572;
	winTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	livesTxt.fontSize = 572;
	livesTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	testTxt.fontSize = 572;
	testTxt.transform.localScale = new Vector3(0.02f,0.02f,0.02f);
	
}