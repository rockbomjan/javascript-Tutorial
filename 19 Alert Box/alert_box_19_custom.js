function CustomAlert(){
    this.render = function(dialog){/* this.render is a method of CustomAlert 
        object. The 'dialog' is the variable for the 'Alert.render' method in html file*/
        // setting up variables
        var winW = window.innerWidth;//This value is needed to position the
        //dialog box
        var winH = window.innerHeight;//This value is needed to position the
        //dialog box
        // Object references for dialogoverlay and dialogbox
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        //Reference to confirm_box_18_3custom.css
        dialogoverlay.style.display = "block";//value is 'None' in the CSS file
        dialogoverlay.style.height = winH+"px";
        //Reference to confirm_box_18_3custom.css
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";//value is 'None' in the CSS file
        document.getElementById('dialogboxhead').innerHTML = "It's a custom dialog box";
        document.getElementById('dialogboxbody').innerHTML = dialog;/*The 'dialog' is
        is the variable for the 'Alert.render' method in html file*/
        //customized button on the foot of the dialog box assigning 'Alert.ok' method.
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){/* this.ok is a method of CustomAlert 
        object and assigned to OK button in the dialog box*/
        //Removes the dialogbox. i.e. value is 'none' in css file.
		document.getElementById('dialogbox').style.display = "none";
        //Removes the dialogoverlay. i.e. value is 'none' in css file.
        document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();/*Here Alert is a new instance of the object
CustomAlert*/