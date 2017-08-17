/*
 * opening animation
 * 
 */

var GameReadyLayer = cc.Layer.extend({
	ctor : function() {
		this._super();
		//将图片资源加载至内存中
		cc.spriteFrameCache.addSpriteFrames(res.Fastman);
		
		//初始化所有的人物对象
		boom.HUMAN_ALL_OBJECT.push(fastman);
		
		
		//根据所有的人物对象  获取实际掉落的几率
		var index = 0;
		boom.HUMAN_ALL_OBJECT.forEach(function(  bojson ){
			var rate = bojson.rate;
			for(var i=0;i<rate;i++){
				boom.HUMAN_PRO_RATE.push( index );
			}
			index++;
		});
		var index = 0;
		boom.ORC_ALL_OBJECT.forEach(function( bojson ){
			var rate = bojson.rate;
			for(var i=0;i<rate;i++){
				boom.ORC_PRO_RATE.push( index );
			}
			index++;
		})
	}
});