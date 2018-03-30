import { ResourceLoader } from "./js/base/ResourceLoader";

//初始化整个游戏的精灵，作为游戏开始的入口
export class Main {
    constructor(){
        console.log("main我执行了")
        new ResourceLoader();
        this.canvas =  wx.createCanvas();
        this.ctx = this.canvas.getContext("2d");
        const loader = ResourceLoader.create();
        // 让资源加载完才进行渲染
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
    }

    onResourceFirstLoaded(map){
        console.log(map)
    }
}