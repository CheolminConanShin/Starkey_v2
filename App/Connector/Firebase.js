import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_cBLBL8CIr4ZidW_L03_XXxMcnqbF-OU",
    databaseURL: "https://starkey-v2.firebaseio.com/",
};

class FirebaseConnector {
    constructor(){
        if(! FirebaseConnector.instance){
            const reference = firebase
                .initializeApp(config)
                .database()
                .ref();
            this.reference = reference;
            FirebaseConnector.instance = this;
        }

        return FirebaseConnector.instance;
    }
}

const instance = new FirebaseConnector();
Object.freeze(instance);

export default instance;