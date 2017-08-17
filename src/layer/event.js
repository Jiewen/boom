var TouchOneByOneLayer = cc.Layer.extend({
	ctor: function() {
		this._super();
		if('touches' in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches: true,
				onTouchBegan: this.onTouchBegan,
				onTouchMoved: this.onTouchMoved,
				onTouchEnded: this.onTouchEnded,
				onTouchCancelled: this.onTouchCancelled
			}, this);
		} else {
			trace("TOUCH-ONE-BY-ONE test is not supported on desktop");
		}

		return true;
	},

	onTouchBegan: function(touch, event) {
		var pos = touch.getLocation();
		var id = touch.getID();
	},
	onTouchMoved: function(touch, event) {},
	onTouchEnded: function(touch, event) {},
	onTouchCancelled: function(touch, event) {}
});

var MouseEventLayer = cc.Layer.extend({
	ctor: function() {
		this._super();
		if('mouse' in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,
				onMouseDown: function(event) {},
				onMouseMove: function(event) {},
				onMouseUp: function(event) {
					var pos = event.getLocation(),
						target = event.getCurrentTarget();
				}
			}, this);
		} else {
			trace("MOUSE Not supported");
		}

		return true;
	}
});