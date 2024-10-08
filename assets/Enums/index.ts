
//地图瓦片类型
export enum TILE_TYPE_ENUM {
  WALL_ROW = 'WALL_ROW',
  WALL_COLUMN = 'WALL_COLUMN',
  WALL_LEFT_TOP = 'WALL_LEFT_TOP',
  WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
  WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
  WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
  CLIFF_CENTER = 'CLIFF_CENTER',
  CLIFF_LEFT = 'CLIFF_LEFT',
  CLIFF_RIGHT = 'CLIFF_RIGHT',
  FLOOR = 'FLOOR',
}

//事件类型
export enum EVENT_ENUM {
  NEXT_LEVEL = 'NEXT_LEVEL',
  PLAYER_CTRL = "PLAYER_CTRL",
}

//控制按钮类型
export enum CONTROLLER_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TURNLEFT = 'TURNLEFT',
  TURNRIGHT = 'TURNRIGHT',
}

//有限状态机参数类型
export enum FSM_PARAMS_TYPE_ENUM {
  NUMBER = 'NUMBER',
  TRIGGER = 'TRIGGER',
}
//状态参数名称
export enum PARAMS_NAME_ENUM {
  IDLE = 'IDLE',
  TURNLEFT = 'TURNLEFT',
  TURNRIGHT = 'TURNRIGHT',
  DIRECTION = 'DIRECTION',
}

//实体类型
export enum ENTITY_TYPE_ENUM {
  PLAYER = 'PLAYER',
  ENEMY = 'ENEMY',
}
//实体状态
export enum ENTITY_STATE_ENUM {
  IDLE = 'IDLE',
  TURNLEFT = 'TURNLEFT',
  TURNRIGHT = 'TURNRIGHT',
}
//实体方向
export enum DIRECTION_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}
export enum DIRECTION_ORDER_ENUM {
  //角色方向的number到string映射，两个枚举集合的key(左值)必须相同才能实现不同value类型的映射
  //因为StateMachine中params(Map类型)的value值里方向是设置成number类型的(其他trigger为boolean),所以有时候需要number、string的互相映射
  TOP = 0,
  RIGHT = 1,
  BOTTOM = 2,
  LEFT = 3,
}
