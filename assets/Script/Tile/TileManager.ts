
import { _decorator, Component, Layers, Node, resources, Sprite, SpriteFrame, UITransform } from 'cc';
import Levels from '../../Level';
import { createUINode } from '../../Utils/indext';

const { ccclass, property } = _decorator;


export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('TileManager')
export class TileManager extends Component {

  init(spriteFrame: SpriteFrame, i: number, j: number) {
    const sprite = this.addComponent(Sprite);
    sprite.spriteFrame = spriteFrame;

    const transform = this.getComponent(UITransform);
    transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

    this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
  }
}

