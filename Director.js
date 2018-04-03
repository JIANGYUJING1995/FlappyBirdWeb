import { DataStore } from "./js/base/DataStore.js";

// 创建一个导演 【 单例模式 】: 存储逻辑
export class Director {
    constructor(){
      this.dataStore = DataStore.getInstance();
    }

    static getInstance(){
        if(!Director.instance){
          Director.instance = new Director()
        }
        return Director.instance;
    }

    // 负责跑起来吧
    run(){
      this.dataStore.get('background').draw();
      this.dataStore.get('land').draw();

      // requestAnimationFrame 根据浏览器的帧率进行动态的调整
      let landTimer = requestAnimationFrame(()=>this.run()); // 进行重复的绘制画面
      this.dataStore.put('landTimer',landTimer);
    }
}