//A function from the previous alert box js file.
function CustomAlert(){
	this.render = function(dialog){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();
//New functions
function deletePost(id){
	var db_id = id.replace("post_", "");
	// Run Ajax request here to delete post from database
    document.body.removeChild(document.getElementById(id));
	/*document.getElementById(id) is the object reference to remove 'post_1'
	or 'post_2'*/
}
function CustomConfirm(){
    this.render = function(dialog,op,id){/*related to html code: 
        <button onclick="Confirm.render('Delete Post?','delete_post','post_1')">*/
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		//html code:<div id="dialogboxhead"></div>
        document.getElementById('dialogboxhead').innerHTML = "Confirm that action";
        //html code:<div id="dialogboxbody"></div>
		document.getElementById('dialogboxbody').innerHTML = dialog;/*dialog is
		passed in the function parameter.*/
        //html code:<div id="dialogboxfoot"></div>
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\''+op+'\',\''+id+'\')">Yes</button> <button onclick="Confirm.no()">No</button>';
	}
	this.no = function(){
        document.getElementById('dialogbox').style.display = "none";
        /*html code:<div id="dialogbox">*/
        document.getElementById('dialogoverlay').style.display = "none";
        /*html code:<div id="dialogboxoverlay">*/
	}
	this.yes = function(op,id){
		if(op == "delete_post"){
			deletePost(id);
		}
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Confirm = new CustomConfirm();