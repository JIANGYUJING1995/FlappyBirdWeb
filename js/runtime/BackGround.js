import { Sprite } from "../base/Sprite.js";

export class BackGround extends Sprite{
    constructor(){
        // 不能在super方法之上，访问this
        // const image = Sprite.getImage('background');
        // 直接获取静态资源res的地址，通过把静态的资源传入，这个一个image的标签
        // <img src="res/background.png">
        const image = Sprite.getImage('background');    
        super(image,
              0,0,
              image.width,image.height,
              0,0,
              window.innerWidth,window.innerHeight
        );
    }

}