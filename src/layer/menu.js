var MenuLayer = cc.Layer.extend({
	ctor: function() {
		this._super();
		var size = cc.winSize;
		var bg = new cc.Sprite(res.GameBg);
		bg.attr({
			x: size.width / 2,
			y: size.height / 2
		});
		this.addChild(bg, 0);
		return true;
	}
});
