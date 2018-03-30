export class Director {
    constructor(){
      console.log("构造器初始化")
    }

    static getInstance(){
        if(!Director.instance){
          Director.instance = new Director()
        }
        return Director.instance;
    }
}