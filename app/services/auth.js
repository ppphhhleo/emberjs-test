import Service from '@ember/service';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, authStateReady, getAuth } from 'firebase/auth';

export default class AuthService extends Service {
    @service firebase;

    auth = getAuth(this.firebase.app);

    @tracked user = undefined;

    async ensureInitialized() {
        await this.auth.authStateReady();
    }
    async ensureLoggedIn() {
        await this.ensureInitialized();
        if (!this.user) {
            throw new Error("NOT LOGGED IN");
        }
    }

    async init() {
        super.init(...arguments);
        await this.ensureInitialized();
        onAuthStateChanged(this.auth,
            (user) => this.user = user,
        )
    }

    @action
    async sign_in_with_popup() {
        const provider = new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        const result = await signInWithPopup(this.auth, provider);
        return result;
    }
    @action
    async sign_out() {
        await signOut(this.auth);
    }
}

