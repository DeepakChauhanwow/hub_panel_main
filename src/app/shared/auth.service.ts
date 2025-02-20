import { Injectable } from '@angular/core';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  // tslint:disable-next-line:typedef
  // signIn(credentials: ISignInCredentials) {
  //   return this.auth
  //     .signInWithEmailAndPassword(credentials.email, credentials.password)
  //     .then(({ user }) => {
  //       return user;
  //     });
  // }

  // // tslint:disable-next-line:typedef
  // signOut() {
  //   return from(this.auth.signOut());
  // }

  // // tslint:disable-next-line:typedef
  // register(credentials: ICreateCredentials) {
  //   return this.auth
  //     .createUserWithEmailAndPassword(credentials.email, credentials.password)
  //     .then(async ({ user }) => {
  //       user.updateProfile({
  //         displayName: credentials.displayName,
  //       });
  //       this.auth.updateCurrentUser(user);
  //       return user;
  //     });
  // }

  // // tslint:disable-next-line:typedef
  // sendPasswordEmail(email) {
  //   return this.auth.sendPasswordResetEmail(email).then(() => {
  //     return true;
  //   });
  // }

  // // tslint:disable-next-line:typedef
  // resetPassword(credentials: IPasswordReset) {
  //   return this.auth
  //     .confirmPasswordReset(credentials.code, credentials.newPassword)
  //     .then((data) => {
  //       return data;
  //     });
  // }

  // // tslint:disable-next-line:typedef
  // async getUser() {
  //   const u = await this.auth.currentUser;
  //   return { ...u, role: getUserRole() };
  // }
}
