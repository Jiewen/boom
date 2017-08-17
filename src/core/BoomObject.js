//定义物体的一些基本属性
var BoomObject = function(bojson,x,y) {
	this.state = boom.OBJ_STATE_STOP; //物体初始状态静止
	this.name = bojson.name;
	this.camp = bojson.camp;  //物体的阵营
	this.x = x; //该物体的坐标
	this.y = y;
	this.blood = bojson.blood; //血量
	this.speed = bojson.speed; //物体的移动速度  这里代表的是走完一个格需要的时间
	this.aggressivity = bojson.aggressivity; //攻击力
	this.attockdistance = bojson.attockdistance; //攻击范围
	this.defense = bojson.defense; //防御
};

BoomObject.prototype.changeState = function(state){
	if(state<3 && state!=this.state){
		this.state = state;
		this.currFram = 0;
	}
}


BoomObject.prototype.SufferHurt = function(bo) {
	console.log(1);
}

/*
 * 得到相对于当前位置的偏移量
 * retrun cc.point  point.x 横向偏移 point.y 纵向偏移
 */
BoomObject.prototype.getNextPoint = function(){
	switch(this.state){
		case boom.OBJ_STATE_STOP:
			return cc.p(0,0); //静止不动
		case boom.OBJ_STATE_MOVE:
			return cc.p(0,0); //
		case boom.OBJ_STATE_ATTOCK:
			return cc.p(0,0); //静止不动
	}
}


BoomObject.prototype.getcurrFrame = function() {
	switch(this.state) {
		case boom.OBJ_STATE_STOP:
			
			break;
		case boom.OBJ_STATE_MOVE:
			
			break;
		case boom.OBJ_STATE_ATTOCK:
			
			break;
	}
}