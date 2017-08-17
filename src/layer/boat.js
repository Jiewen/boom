var BoatLayer = cc.Layer.extend({
	sprite: null,
	ctor: function() {
		this._super();
		var size = cc.winSize;

		this.sprite = new cc.Sprite(res.Boat);
		this.sprite.attr({
			x: 160,
			y: 550
		});
		var action1 = cc.scaleTo(2, 1, 1);
		var action2 = cc.scaleTo(2, -1, 1);
		var action3 = cc.moveTo(10, cc.p(805, 550));
		var action4 = cc.moveTo(10, cc.p(160, 550));
		var sequence = cc.sequence(action3, action2, action4, action1);
		var repeat = cc.repeatForever(sequence);
		this.sprite.runAction(repeat);
		this.addChild(this.sprite);
		return true;
	}
});