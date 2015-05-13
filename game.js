function* chooseYourAdventure() {
	yield adventure.start('Welcome to an awesome adventure!');
	yield adventure.say('Hello world!');
	var name = yield adventure.ask('What is your name?');
	var chooseMessage = 'Hello, '+name+'! Would you like to go on an adventure?';
	var cont = yield adventure.choose(chooseMessage, 'Yes!', 'No thanks');
	adventure.end('That\'s all folks!');
}