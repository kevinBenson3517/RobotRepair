#pragma strict

var customSkin:GUISkin;

function OnGUI () {
	GUI.skin = customSkin;
	if(GUI.Button(Rect(0,0,100,50),"Play Game")) {
		print("Button Clicked!");
	}

}

function Start () {

}

function Update () {

}