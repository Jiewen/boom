var boom = {};

boom.OBJ_STATE_STOP = 0;
boom.OBJ_STATE_MOVE = 1;
boom.OBJ_STATE_ATTOCK = 2;

/**
 * 当前的场景
 */
boom.CURR_SCENE = null;
/**
 * 物体阵营 人族
 */
boom.OBJ_CAMP_HUMAN = 1;
/**
 * 物体阵营 兽族
 */
boom.OBJ_CAMP_ORC = 2;

/**
 * 单个帧的切换时间
 */
boom.FRAM_CHANGE_TIME = 0.2;
/**
 * 所有的人类角色 读取json文件
 */
boom.HUMAN_ALL_OBJECT = new Array();
/**
 * 人类角色出现的几率
 */
boom.HUMAN_PRO_RATE = new Array();
/**
 * 所有的怪兽角色 读取json文件
 */
boom.ORC_ALL_OBJECT = new Array();
/**
 * 所有怪兽出现的几率
 */
boom.ORC_PRO_RATE = new Array();
