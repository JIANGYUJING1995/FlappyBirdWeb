//精灵的基类，负责初始化精灵加载的资源和大小以及位置
export class Sprite {
    constructor(
        ctx = null,
        img = null, //绘制的对象
        srcX = 0,   //剪裁的x,y
        srcY = 0,
        srcW = 0,   //剪裁的宽高
        srcH = 0,
        x = 0, y = 0,  // 布局到canvas的坐标
        width = 0, height = 0 // 布局到canvas的宽度高度
    ){
        this.ctx = ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * img 传入Image对象
     * srcX 要剪裁的起始X坐标
     * srcY 要剪裁的起始Y坐标
     * srcW 剪裁的宽度
     * srcH 剪裁的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */
    draw(img = this.img,
        srcX = this.srcX,
        srcY = this.srcY,
        srcW = this.srcW,
        srcH = this.srcH,
        x = this.x,
        y = this.y,
        width = this.width,
        height = this.height) {
       this.ctx.drawImage(
           img,
           srcX,
           srcY,
           srcW,
           srcH,
           x,
           y,
           width,
           height
       );
   }
}