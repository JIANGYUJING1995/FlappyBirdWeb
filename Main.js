import { ResourceLoader } from "./js/base/ResourceLoader";
import { Director } from "./Director.js";
const RES_PATH = '../res/';
const RES_EXTE = '.png'
const RES_IMGS =  {
    'background.png': 'background.png',
    'birds.png': 'birds.png',
    'land.png': 'land.png',
    'pie_down.png': 'pie_down.png',
    'pie_up.png': 'pie_up.png',
    'start_button.png': 'start_button.png',
}


//初始化整个游戏的精灵，作为游戏开始的入口
export class Main {
    constructor(){
        console.log("main我执行了")
        new ResourceLoader();
        this.canvas =  wx.createCanvas();
        this.ctx = this.canvas.getContext("2d");
        console.log(this.ctx)
        const loader = ResourceLoader.create();
        // 让资源加载完才进行渲染
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
        // Director.getInstance();

        let image = wx.createImage;
        image.src = `${RES_PATH}${RES_IMGS["background.png"]}`
        console.log(image.src)
        this.ctx.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          0,
          0
        )
    }

    onResourceFirstLoaded(map){
        console.log(map)
    }
}