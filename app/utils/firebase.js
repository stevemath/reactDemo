import app from 'firebase/app'
import FirebaseContext, { withFirebase } from '../components/context';
import 'firebase/auth';
import 'firebase/database';

 const firebaseConfig = {
    apiKey: "AIzaSyCoh5hIT24bAb-xJZA6hdzORMQjQmN0yEA",
    authDomain: "botg-df38f.firebaseapp.com",
    databaseURL: "https://botg-df38f.firebaseio.com",
    projectId: "botg-df38f",
    storageBucket: "",
    messagingSenderId: "565293575607",
    appId: "1:565293575607:web:d48839f1daf0b6f34a4c32"
  };
 
  class Firebase{
constructor(){
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
}


doCreateUserWithEmailAndPassword = (email, password,userName) =>
this.auth.createUserWithEmailAndPassword(email, password)
// .then((user)=>{
//     console.log(user);
//     console.log("update profile");
//     user.user.updateProfile({
//         displayName:userName,
        
//     }).then((user2)=>{
// console.log('profile updated');
// console.log(user2);
//             return user2 
//         })
    
//         })
        
       

doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);


    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);  
      
      
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users').orderByChild('topScore');
      scores = (uid)=> this.db.ref(`scores/${uid}`);
      myScores = (uid)=> this.db.ref(`scores/${uid}`).orderByChild('score')
}

  export default Firebase;
  export { FirebaseContext, withFirebase };
 