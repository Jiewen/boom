function trace() {
	cc.log(Array.prototype.join.call(arguments, ", "));
}

function CreateRandLayer( camp,x,y){
	if (camp==boom.OBJ_CAMP_HUMAN){
      //获取随机数 
      var rand = parseInt(Math.random()*boom.HUMAN_PRO_RATE.length);
      var human = boom.HUMAN_ALL_OBJECT[boom.HUMAN_PRO_RATE[rand]];
      var randlayer = eval("new "+human.name+'('+x+','+y+')');
      randlayer.initBo( human,x,y);
      return randlayer; 
	}else{
	  //获取随机数 
      var rand = parseInt(Math.random()*boom.ORC_PRO_RATE.length);
      var orc = boom.ORC_ALL_OBJECT[boom.ORC_PRO_RATE[rand]];
      var randlayer = eval("new "+orc.name+'('+x+','+y+')');
      randlayer.initBo( orc,x,y);
      return eval("new "+orc.name+'('+x+','+y+')'); 
	}
}
