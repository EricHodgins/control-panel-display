var numPadFunctional = false;
var screenTracker = [];
var currentArrowPosition = 0;

// The main screens
var textScreens = {
		// main screen
		mainScreen: [
			"<p><span>></span>Dispense Product</p>",
			"<p><span>></span>Display Inventory</p>",
			"<p><span>></span>Update Inventory</p>",
			"<p><span>></span>General Scale</p>",
		],

		setupScreen: [
			"<p><span>></span>Dispense Mode</p>",
			"<p><span>></span>Dealer Mode</p>",
			"<p><span>></span>Master Mode</p>",
		]
};


var currentScreen = textScreens.mainScreen;
screenTracker.push(currentScreen);

// Change the arrow marker to black (makes it look like it's moving)
function markScreenPoint(markerPoint) {
	var markSpan = "span:eq(" + markerPoint + ")";
	$('#ppacScreen').children('p').children(markSpan).css("color", "black");
};

function loadNewScreen(screenName, addScreen) {
	currentScreen = screenName;
	if (addScreen) {
		screenTracker.push(screenName);
	}
	
	$('#ppacScreen').children().remove("p");
	$('#ppacScreen').children().remove("span");
	$('#ppacScreen').children().remove("br");
	

	$.each(screenName, function(i, screenPoint) {
		$('#ppacScreen').append(screenPoint);
	});

	currentArrowPosition = 0;
	markScreenPoint(0);
};


// initalize Main Screen
$.each(textScreens.mainScreen, function(i, screenPoint) {
	$('#ppacScreen').append(screenPoint);
	markScreenPoint(0);
		
});







// Hitting up on key pad
$('.up').click(function() {
	if (currentArrowPosition > 0) {
		var deselectOldSpan = "span:eq(" + currentArrowPosition + ")"; 
		$('#ppacScreen').children('p').children(deselectOldSpan).css("color", "rgb(124, 174, 110)");
		currentArrowPosition -= 1;
		markScreenPoint(currentArrowPosition);
	}
});


// Hitting down on key pad
$('.down').click(function() {
	if (currentArrowPosition < (currentScreen.length - 1)) {
		var deselectOldSpan = "span:eq(" + currentArrowPosition + ")";
		$('#ppacScreen').children('p').children(deselectOldSpan).css("color", "rgb(124, 174, 110)");
		currentArrowPosition += 1;
		markScreenPoint(currentArrowPosition);
	}
});


// Hitting Setup
$('.setup').click(function() {
	if (currentScreen === textScreens.mainScreen) {
		currentScreen = textScreens.setupScreen;
		currentArrowPosition = 0;
		loadNewScreen(currentScreen, true);
	}
});

// Pushing Clear
$('.clearButton').click(function() {
	if (configEditMode) {
		configEditMode = false;
		$('span').remove();
	} else if (currentScreen !== textScreens.mainScreen) {
		console.log("screen popped");
		screenTracker.pop();
		loadNewScreen(screenTracker[screenTracker.length - 1], false);
	} 

});

// Load Master Mode
function loadMasterMode() {
	loadNewScreen(masterModeScreens.masterCodeScreen, true);
};

// Map next screen from Master Mode
function mapScreen(currentScreen, screenOption) {

	if (currentScreen === textScreens.setupScreen) {
		switch (screenOption) {
			case 0: // Dispense Mode
				break;
			case 1: // Dealer Mode
				break;
			case 2: // Master Mode
				loadMasterMode();
				break;
		}
	} else if (currentScreen === masterModeScreens.masterOptionsScreen) {
		switch (screenOption) {
			case 0: // Dispense Mode
				break;
			case 1: // Calibration Mode
				break;
			case 2: // Configuration Mode
				loadConfigMode();
				break;
			case 3: // Test Mode
				break
		}
	}
};

// Pushing Enter
$('.enter').click(function() {
	
	if (currentScreen === textScreens.setupScreen) { // if on setup screen
		mapScreen(currentScreen, currentArrowPosition);
	} else if (currentScreen === masterModeScreens.masterCodeScreen) { // if on master mode screen entering for passcode
		testPasscode();
	} else if (currentScreen === masterModeScreens.masterOptionsScreen) { // if on master mode options screen...config, test mode etc..
		mapScreen(currentScreen, currentArrowPosition);
	} else if (configMode) {
		enterConfigMode();
	}




});

// Pushed num pad
$('.numPad').click(function() {
	if (currentScreen === masterModeScreens.masterCodeScreen) {
		numpadValue = $(this).text();
		showNumbers(numpadValue);
	} else if (configEditMode) {
		numpadValue = $(this).text();
		showNumbers(numpadValue);
	}
});

// Pushed Backspace
$('.backSpace').click(function() {
	if (currentScreen === masterModeScreens.masterCodeScreen) {
		removeNumber();
	} else if (configEditMode) {
		removeNumber();
	}
});