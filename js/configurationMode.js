var configSettings = {
	dribble1: 45,
	dribble2: 45,
	dribble3: 45,
	dribble4: 45,
	dribble5: 45,
	dribble6: 45
}


var configMode = false;
var configEditMode = false;
var configurationScreens = {
	reinstallFactoryDefualtsScreen: [['<p class="config">Reinstall Factory</p>',
									 '<p class="config">Default Numbers',
									 '<p class="editConfig"></p>'], ['<span class="configSpan">Nooooo!!!!</span>']],

	dribbleScreen1: [['<p class="config">Set Dribble 1 amount</p>',
					  '<p class="config">Current Dribble is</p>',
					  '<p class="config configSetting">45 grams</p>',
					  '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>'], 55],

	dribbleScreen2: [['<p class="config">Set Dribble 2 amount</p>',
					  '<p class="config">Current Dribble is</p>',
					  '<p class="config configSetting">55 grams</p>',
					  '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>'], 45]					  
}

var configScreenTracker = 0;
var configScreensInOrder = [];
$.each(configurationScreens, function(key, value) {
	configScreensInOrder.push(value);
});

function loadConfigMode() {
	configMode = true;
	loadNewScreen(configScreensInOrder[0][0], true);
}

// Pushing enter 
function enterConfigMode() {
	console.log("pushed enter..configu mode");
	if (!configEditMode) {
		configEditMode = true;
		console.log(configScreensInOrder[configScreenTracker][1]);
		var editableText = configScreensInOrder[configScreenTracker][1]
		$('.editConfig').css("display", "inline").append(editableText);
	} else if (configEditMode) {
		configEditMode = false;
		var userEntry = "";
		for (var i = 0; i < numSequence.length; i++) {
			if (numSequence[i] !== "_ ") {
				userEntry += String(numSequence[i]);
			}
		};
		$('.configSetting').text(userEntry + " grams");
		$("span").remove();
		$('.editConfig').css("display", "none");
		numSequence = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ '];
		numPositionTracker = 0;
	}
	
}

$('.down').click(function() {
	if ((configScreenTracker + 1 < configScreensInOrder.length) && configMode && !configEditMode) {
		console.log("config mode, going down...");
		configScreenTracker += 1;
		loadNewScreen(configScreensInOrder[configScreenTracker][0]);
	}
});

$('.up').click(function() {
	if (configMode && !configEditMode && (configScreenTracker > 0)) {
		console.log("config mode, going up...")
		configScreenTracker -= 1;
		loadNewScreen(configScreensInOrder[configScreenTracker][0]);
	}
});

$('.clearButton').click(function() {
	if (configMode && !configEditMode) {
		configScreenTracker = 0;
		configMode = false;
	} else if (configEditMode) {
		console.log("setting configEditMode to false");
		$('.editConfig').css("display", "none");

	}
});
