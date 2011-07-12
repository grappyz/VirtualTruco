/**
 * TimelineController Class
 */
var TimeLineController = function(model) {
	this._model = model;
};

TimeLineController.prototype = {
	play: function() {
		this._model.setState(this._model.states.PLAYING);
	},
	
	pause: function() {
		this._model.setState(this._model.states.PAUSED);
	},
	
	previousMove: function() {
		var move = this._model.getCurrentMove();
		this._model.setMove(--move);
	},
	
	nextMove: function() {
		var move = this._model.getCurrentMove();
		this._model.setMove(++move);
	},
	
	seekMove: function(move) {
		this._model.setMove(move);
	},
	
	normalSpeed: function() {
		this._model.setSpeedMultiplier(this._model.speedMultipliers.NORMAL);
	},

	fastSpeed: function() {
		this._model.setSpeedMultiplier(this._model.speedMultipliers.FAST);
	},
	
	fasterSpeed: function() {
		this._model.setSpeedMultiplier(this._model.speedMultipliers.FASTER);
	}
};