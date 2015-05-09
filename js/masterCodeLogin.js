//More in depth screens 'Master Mode', 'Configuration Mode', 'Test Mode'
var masterModeScreens = {
	masterCodeScreen: ['<p class="hint">hint: 671*</p><p class="masterMain">Enter master Code</p>',
					   '<p class="masterMain">to access the secure</p><p class="masterMain">features</p>',
					   '<p class="masterMain">Master Code =<span class="enterNumbers">_ _ _ _ _ _</span></p>'
					  ],

	masterEntryScreen: ['<p class="masterMain">Use UP & DOWN to</p>',
						'<p class="masterMain">select Master menus.</p>',
						'<p class="masterMain">Press &ltENTER&gt to</p>',
						'<p class="masterMain">change display.</p>'],

	masterOptionsScreen: [
			"<p><span>></span>Dispense Mode</p>",
			"<p><span>></span>Calibration Mode</p>",
			"<p><span>></span>Configuration Mode</p>",
			"<p><span>></span>Test Mode</p>",
		]
};


var numSequence = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ '];
var numPositionTracker = 0;

function showNumbers(numpadValue) {
	var temp = '';
	for (var i = 0; i < numSequence.length; i++) {
		if (i === numPositionTracker) {
			temp += numpadValue;
			numSequence[i] = parseInt(numpadValue);
		}else {
			temp += numSequence[i];
		}
	};
	$('.enterNumbers').text(temp);

	if (numPositionTracker < numSequence.length) {
		numPositionTracker += 1;
	}
};

function removeNumber() {
	if (numPositionTracker > 0) {
		numPositionTracker -= 1;
		numSequence[numPositionTracker] = '_ ';
		var temp = '';
		for (var i = 0; i < numSequence.length; i++) {
			if (i === numPositionTracker) {
				temp += '_ ';
			} else {
				temp += numSequence[i];
			}
		};
		$('.enterNumbers').text(temp);
	}
};


// Enter pushed 
function testPasscode() {
	var userCode = "";
	for (var i = 0; i < numSequence.length; i++) {
		if (numSequence[i] !== "_ ") {
			userCode += String(numSequence[i]);
		}
	};

	// Load entry screen. UP & DOWN junk
	if (parseInt(userCode) === 6717 || parseInt(userCode) === 5266) {
		numSequence = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ '];
		numPositionTracker = 0;
		loadNewScreen(masterModeScreens.masterEntryScreen, false);
	}
	
}

// push down on Entry screen.  Should now show master mode options..config, test, etc.
$('.down').click(function() {
	if (currentScreen === masterModeScreens.masterEntryScreen) {
		loadNewScreen(masterModeScreens.masterOptionsScreen, true);
		currentScreen = masterModeScreens.masterOptionsScreen;
	}

});