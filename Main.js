import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./Director.js";
import { BackGround } from "./js/runtime/BackGround.js";
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
        
    }

    onResourceFirstLoaded(map){
        // console.log(map)
        let image = new Image();
        let background = new BackGround(this.ctx,map.get('background'));
        background.draw();
    }
}