import { makeAutoObservable } from 'mobx';

class mainStore{
    userName='';
    osrsStats=null;
    title1 = '';
    title2 = '';
    title3 = '';
    title4 = '';
    paragraph1 = '';

    setUserName(details){
        this.userName = details;
    }

    setTitle(slot,details){
        switch(slot){
            case 0:
                this.title1 = details;
                break;
            case 1:
                this.title2 = details;
                break;
            case 2:
                this.title3 = details;
                break;
            case 3:
                this.title4 = details;
                break;
            default:
                break;
        }

    }

    setParagraph(details){
        this.paragraph1 = details;
    }


    appendTitle(slot,details){
        switch(slot){
            case 0:
                this.title1 = this.title1+details;
                break;
            case 1:
                this.title2 = this.title2+details;
                break;
            case 2:
                this.title3 = this.title3+details;
                break;
            case 3:
                this.title4 = this.title4+details;
                break;
            default:
                break;
        }

    }
    appendParagraph(details){
        this.paragraph1 = this.paragraph1+details;
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

