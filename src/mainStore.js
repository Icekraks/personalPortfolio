import { makeAutoObservable } from 'mobx';

class mainStore{
    userName="";

    setUserName(details){
        this.userName = details;
    }

    appendUserName(detail){
        this.userName = this.userName+detail;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

const storeInstance = new mainStore();
export default storeInstance;

