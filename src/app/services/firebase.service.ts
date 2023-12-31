import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../moldels/user.model';
import {getAuth, updateProfile} from 'firebase/auth';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private utilsSvs: UtilsService
  ) { }

  //========autenticacion===========//

    login(user: user){
      return this.auth.signInWithEmailAndPassword(user.email, user.password)
    }

    signUp(user: user){
      return this.auth.createUserWithEmailAndPassword(user.email, user.password)
    }

    updateUser(user: any){
      const auth = getAuth();
      return updateProfile(auth.currentUser, user)
    }

    getAuthState(){
      return this.auth.authState
    }

    singOut(){
      return this.auth.signOut()
    }

}
