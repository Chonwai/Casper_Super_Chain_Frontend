// contact.js
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class Auth {
    constructor() {
        this.contactCreateAccount = this.contactCreateAccount.bind(this);
    }

    async contactCreateAccount(values) {
        console.log(values);
        const res = await axios.post(`${baseURL}/api/v1/auth/register/marketing`, values);
        return res.data;
    }
}
