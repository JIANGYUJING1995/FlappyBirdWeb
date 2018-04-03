import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./Director.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { DataStore } from "./js/base/DataStore.js";
import { Land } from "./js/runtime/Land.js";
//初始化整个游戏的精灵，作为游戏开始的入口
export class Main {
    constructor(){
        // 创建一个加载器
        new ResourceLoader();
        // 创建canvas
        this.canvas =  document.getElementById("game_canvas");
        // 绘制2d图像
        this.ctx = this.canvas.getContext('2d');
        // 初始化DataStore
        this.dataStore = DataStore.getInstance();
        // 当只有canvas加载完成之后再去创建静态资源图片的加载
        const loader = ResourceLoader.create();
        // 让资源加载完才进行渲染-通过把回调函数传入onLoaded->再由onLoaded进行调用
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
        
    }

    // 待静态资源再执行加载
    onResourceFirstLoaded(map){
        /* [ 通过把公共的值放置dataStore里面 ] */
        this.dataStore.ctx = this.ctx;  // 赋值ctx
        this.dataStore.res = map;       // 赋值map静态图片对象
        this.init();
    }

    // 初始化方法
    init(){
        // 设置dataStore初始化的方法
        // 一个构造函数对于js来说，所以不传入new，是一个Function
        this.dataStore
            .put(`background`,
                BackGround)     //背景
            .put(`land`,Land)   // 陆地
        Director.getInstance().run();   // 运行
    }

}