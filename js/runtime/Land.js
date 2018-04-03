import {
    Sprite
} from "../base/Sprite.js";

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land');
        // window.ininnerWidth - image.height:因为需要把它放置底部。所以需要求出距离顶部的距离
        super(image,
            0, 0,
            image.width, image.height,
            0, window.innerHeight - image.height,
            image.width, image.height
        );
        this.landX = 0; //地板的x值
        this.landSpeed = 2; //地板移动速度
    }

    // 繪製地板
    draw() {
        this.landX = this.landX + this.landSpeed;

        if (this.img.width - window.innerWidth <= this.landX) {
            this.landX = 0;
        }


        // super可以使用继承的Sprite参数，优先使用本类的
        super.draw(
            this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH, -this.landX, // 从右往左
            this.y,
            this.width,
            this.height
        );
    }

}