// 变量缓存器，方便我们在不同的类中访问和修改变量
/**
 *  如果需要随时销毁的对象则放置map中
 *  否则则放置DataStore的对象中
 */
export class DataStore {
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }
    constructor(){
        this.map = new Map();
    }
    // 传入静态资源对象
    put(key,value){
        this.map.set(key,value);
        return this;
    }

    // 获取静态资源对象
    get(key){
        return this.map.get(key);
    }

    // 置空
    destroy () {
        for (let value of this.map.values()) value = null;
    }
}