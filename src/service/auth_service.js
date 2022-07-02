import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth'

class AuthService{
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
        // console.log(name);
        const authProvider = this.getProvider(name);
        // console.log(authProvider);
        return signInWithPopup(this.firebaseAuth,authProvider);
    }

    logout(){
        console.log('logOut...');
        signOut(this.firebaseAuth);
    }

    onAuthChanged(onUserChanged){
        this.firebaseAuth.onAuthStateChanged(user =>{
            onUserChanged(user);
        })
    }
}

export default AuthService;