function startTime() {
	var now;
	var color = "";  
	var timeDisplay = document.getElementById("time"); //So we don't traverse the DOM every time the function runs
	
	function update() {
		//Lets do the actual heavy lifting/updating here to avoid recreating variables for every iteration
		now = new Date();
		color = createCode(now.getHours(), now.getMinutes(), now.getSeconds());
		document.body.style.background = '#' + color;
		timeDisplay.innerHTML = cleanCode(color);			
	}

	setInterval(update, 500);
}

function createCode(h, m, s) {
	//checks the length of hour, minute, and second, and adds a 0 to make sure that the time code is always 6 digits long
  	h = appendTime(h);
  	m = appendTime(m);
  	s = appendTime(s);
  	//Without the '' JS will presume these variables are integers, so the concat method won't work. This "tricks" JS into thinking they're strings.
  	h = '' + h;
  	m = '' + m;
  	s = '' + s;
  	return(h.concat(m.concat(s)));
}
function appendTime(t) {
	//Takes on of the time variables and tests if it's under two digits. If so, then add a 0 to the front and return it.
	t = ('0' + t).slice(-2);
	return (t);
}
function cleanCode(c) {
	//Starts with the color code and breaks it up into a more easily readable time format.
	return (c.substring(0, 2) + ":" + c.substring(2, 4) + ":" + c.substring(4, 6));
}