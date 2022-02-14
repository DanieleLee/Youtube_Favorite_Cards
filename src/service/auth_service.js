import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { firebaseApp } from './fBase';

export default class AuthService{
    constructor(){
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.gitProvider = new GithubAuthProvider();
    }

    getProvider(name){
        switch(name){
            case 'Google' :
                return this.googleProvider;
            case 'Git' :
                return this.gitProvider;
            default :
                throw new Error('not found provider');
     
        }
    }

    login(name){
        const authProvider = this.getProvider(name);
        return signInWithPopup(this.firebaseAuth,authProvider);
    }

}
