var FastMan = cc.Layer.extend({
	bo: null,
	sprite: null,
	MoveAction: null,
	SttockAction: null,
	StopAction: null,

	ctor: function(x, y) {
		this._super();
		this.MoveAction = new cc.RepeatForever(new cc.Animate(
			new cc.Animation([1, 2, 3, 4, 5, 6].map(function(i) {
				return cc.spriteFrameCache.getSpriteFrame("sprite/fastman/move" + i + ".png");
			}), 0.18)
		));
		this.MoveAction.retain();
		this.sprite = new cc.Sprite("#sprite/fastman/move1.png");
		this.sprite.attr({
			x: x,
			y: y
		});
		this.sprite.runAction(new cc.ScaleTo(0, -0.75, 0.75));
        //出场动画完成之后 添加角色
		setTimeout(function() {
			this.addChild(this.sprite);
			this.sprite.runAction(this.MoveAction);
		}.bind(this), 1000);
		return true;
	},
	cframe: function() {

	},
	initBo : function(bojson,x,y){
		this.bo = new BoomObject( bojson,x,y );
	}
});