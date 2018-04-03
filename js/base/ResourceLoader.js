import { Resources } from "./Resources.js";

//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources);
        for(let [key,value] of this.map){
          const image = new Image() // 可以使用wx.createImage == new Image()
          image.src = value;
          this.map.set(key,image);
        }
    }

    onLoaded(callback){
      let loadedCount = 0;
      // 通过map.values()写法取到的是values的所有值，忽略key
      // 只有图片加载完成之后才会执行
      for (let value of this.map.values()){
          value.onload = () =>{
              loadedCount++;
              if(loadedCount>=this.map.size){
                callback(this.map)
              }
          }
      }
    }

    static create(){
      return new ResourceLoader();
    }
}