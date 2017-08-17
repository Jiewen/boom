var GameWorldScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		moveRegion = move_region.object;
		var game_ready = new GameReadyLayer();
		var randlayer = CreateRandLayer(boom.OBJ_CAMP_HUMAN,250,172);
		this.addChild( randlayer, 1);
		
		var menu = new MenuLayer();
		this.addChild( menu,2 );
		
//		this.schedule(this.cframe,boom.FRAM_CHANGE_TIME);
	},
	cframe:function(){
	}
});