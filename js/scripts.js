function ToDoList() {
	this.chore = {};
	this.currentId = 0;
}

ToDoList.prototype.addChore = function(chore) {
	chore.id = this.assignId();
	this.chore[chore.id] = chore;
};

ToDoList.prototype.assignId = function() {
	this.currentId += 1;
	return this.currentId;
};

ToDoList.prototype.findChore = function(id) {
	if (this.chore[id] != undefined) {
		return this.chore[id];
	}
	return false;
};

ToDoList.prototype.deleteChore = function(id) {
	if (this.chore[id] === undefined) {
		return false;
	}
	delete this.chore[id];
	return true;
};

function Chore(choreName, choreLocation, choreTimeLength, choreDate) {
	this.choreName = choreName;
	this.choreLocation = choreLocation;
	this.choreTimeLength = choreTimeLength;
	this.choreDate = choreDate;
}

$(document).ready(function() {
	$("#inputForm").submit(function(event) {
	event.preventDefault();
	const choreName = ("")
	
	// buttonId = addChore
	// buttonId = deleteChore 
	});
});