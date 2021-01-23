import { makeAutoObservable } from 'mobx';

class mainStore{
    userDetails=null;
    setUserDetails(details){
        this.userDetails = details;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

const storeInstance = new mainStore();
export default storeInstance;

