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
      const backgroundSprite = this.dataStore.get('background');
      backgroundSprite.draw();
    }
}