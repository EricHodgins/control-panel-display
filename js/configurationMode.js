
var configMode = false;
var configEditMode = false;
var configurationScreens = [	

				{
					screenText: function() {
						return [['<p class="config">Reinstall Factory</p>',
		 						'<p class="config">Default Numbers',
		  						'<p class="editConfig"></p>'], ['<span class="configSpan">Nooooo!!!!</span>']];
					}
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 1 amount</p>', '<p class="config">Current Dribble is</p>', 
		 						'<p class="config configSetting">' + this.screenSetting + ' grams</p>',
		 						'<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];
					 }
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 2 amount</p>', 
					  			 '<p class="config">Current Dribble is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' grams</p>',
					  	 		 '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 3 amount</p>', 
					  			 '<p class="config">Current Dribble is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' grams</p>',
					  	 		 '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 4 amount</p>', 
					  			 '<p class="config">Current Dribble is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' grams</p>',
					  	 		 '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 5 amount</p>', 
					  			 '<p class="config">Current Dribble is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' grams</p>',
					  	 		 '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},

				{
					screenSetting: 55,
					screenText: function() {
						return [['<p class="config">Set Dribble 6 amount</p>', 
					  			 '<p class="config">Current Dribble is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' grams</p>',
					  	 		 '<p class="editConfig">New Dribble =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 1</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},		

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 2</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},							

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 3</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},							

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 4</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},							

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 5</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},							

				{
					screenSetting: 75,
					screenText: function() {
						return [['<p class="config">Set spit time 6</p>', 
					  			 '<p class="config">Current Spit time is</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' mS</p>',
					  	 		 '<p class="editConfig">New Spit time =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				},	

				{
					screenSetting: 600,
					screenText: function() {
						return [['<p class="config">Transfer container</p>', 
					  			 '<p class="config">error weight.</p>',
					  			 '<p class="config configSetting">' + this.screenSetting + ' g</p>',
					  	 		 '<p class="editConfig">New Weight =</p>'], ['<span class="enterNumbers">_ _ _ _ _ _</span>']];

					}
				}													

									   

					  					  					  					  					  					  
];

var configScreenTracker = 0;
var configScreensInOrder = [];


function loadConfigMode() {
	console.log("starting configmode...");
	currentArrowPosition = 0;
	configMode = true;
	configScreensInOrder.push(configurationScreens[0]);
	loadNewScreen(configScreensInOrder[0].screenText()[0], true);
}

// Pushing enter 
function enterConfigMode() {
	console.log("pushed enter..configu mode");
	if (!configEditMode) {
		configEditMode = true;
		var editableText = configScreensInOrder[configScreenTracker].screenText()[1];
		$('.editConfig').css("display", "inline").append(editableText);
	} else if (configEditMode) {
		configEditMode = false;
		var userEntry = "";
		for (var i = 0; i < numSequence.length; i++) {
			if (numSequence[i] !== "_ ") {
				userEntry += String(numSequence[i]);
			}
		};

	
		$("span").remove();
		$('.editConfig').css("display", "none");

		configScreensInOrder.pop();
		var newEditedScreen = configurationScreens[configScreenTracker];
		newEditedScreen.screenSetting = userEntry;
		configScreensInOrder.push(newEditedScreen);
		loadNewScreen(configScreensInOrder[configScreenTracker].screenText()[0], false);

		numSequence = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ '];
		numPositionTracker = 0;
	}
	
}

$('.down').click(function() {
	if ((configScreenTracker >= 0) && (configScreenTracker < configurationScreens.length - 1) && (configMode && !configEditMode)) {
		console.log("config mode, going down...");
		configScreenTracker += 1;
		configScreensInOrder.push(configurationScreens[configScreenTracker]);
		loadNewScreen(configScreensInOrder[configScreenTracker].screenText()[0], false);
	}
});

$('.up').click(function() {
	if ((configMode && !configEditMode) && (configScreenTracker > 0) && (configScreenTracker <= configurationScreens.length - 1)) {
		console.log("config mode, going up...")
		configScreenTracker -= 1;
		configScreensInOrder.pop();
		loadNewScreen(configScreensInOrder[configScreenTracker].screenText()[0], false);
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
