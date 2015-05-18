function* chooseYourAdventure(){
	//yield adventure.start('Welcome to an awesome adventure!');
	//yield adventure.say('Hello world!');
	//var name = yield adventure.ask('What is your name?');
	//var chooseMessage = 'Hello, '+name+'! Would you like to go on an adventure?';
	//var cont = yield adventure.choose(chooseMessage, 'Yes!', 'No thanks');
	//adventure.end('That\'s all folks!');


yield adventure.start('We\'re going to Paris!');
yield adventure.say('There will be lots of sightseeing and dining!');
var myName= yield adventure.ask('Before we begin, Comment tu t\'apelles?');
yield adventure.say('Bonjour '+myName+', Von Voyage!');
var myObject = yield adventure.choose('What are you going to bring with you?', 'A sketchbook', 'A camera'); 
yield adventure.say( 'You chose a '+myObject);

	if(myObject === 'A sketchbook'){
		yield adventure.say ('You live in the moment!');
	}
	 else if (myObject === 'A camera') {
	 	yield adventure.say ('You don\'t live in the moment!');
	 }

var userContinue = yield adventure.choose(
	'Would you like to continue?',
	'Oui!',
	'Non!' 
	);
	
	console.log (userContinue);

	if (userContinue === 'Non!'){
		yield adventure.say ( 'Au revoir!');

	}

	else if (userContinue === 'Oui!'){
		yield adventure.say ( 'Bienvenue!');
	}

	
}















