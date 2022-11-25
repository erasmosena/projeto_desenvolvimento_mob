export default class CommonDataManager {

    static myInstance = null;

    _user = {};


    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getUser() {
        return this._user;
    }

    setUser(user) {
        this._user = user;
    }
}