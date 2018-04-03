import { ResourceLoader } from "./js/base/ResourceLoader.js";
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
        console.log("执行man")
        // 创建一个加载器
        new ResourceLoader();
        // 创建canvas
        this.canvas =  document.getElementById("game_canvas");
        // 绘制2d图像
        this.ctx = this.canvas.getContext('2d');
        // 当只有canvas加载完成之后再去创建静态资源图片的加载
        const loader = ResourceLoader.create();
        // 让资源加载完才进行渲染-通过把回调函数传入onLoaded->再由onLoaded进行调用
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
        // Director.getInstance();

        let image = new Image();
        // image.src = `${RES_PATH}${RES_IMGS["background.png"]}`;
        image.src = '../res/background.png';
        image.onload = () =>{
            this.ctx.drawImage(
                image,
                0, 0, 
                image.width,image.height,
                0,0,
                image.width,image.height
            );
        };
        
    }

    onResourceFirstLoaded(map){
        console.log(map)
    }
}