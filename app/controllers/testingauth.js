import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TestingauthController extends Controller {
    @service auth;

    @action
    async sign_in_with_popup() {    
        try {
            await this.auth.sign_in_with_popup();
        } catch (error) {
            console.error(error);
        }
    }

    @action
    async sign_out() {
        await this.auth.sign_out();
        console.log("signed out");
    }
}
