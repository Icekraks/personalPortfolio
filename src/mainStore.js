import { makeAutoObservable } from 'mobx';

class mainStore{
    userName='';
    osrsStats=null;
    title1 = '';
    title2 = '';
    title3 = '';
    title4 = '';
    paragraph1 = '';
    osrsUsername = 'IcekraksIG';
    name = "Felix Hu";
    tableStats = { };
    pageName = 'Home'
    token = null;

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

    setOsrsUsername(name){
        this.osrsUsername = name;
    }

    setTableStats(stats){
        this.tableStats = stats;
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

    setPageName(page){
        this.pageName = page;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

const storeInstance = new mainStore();
export default storeInstance;

