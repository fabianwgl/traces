import axios from 'axios';

export default class FixerService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://api.apilayer.com/fixer/';
    }

    latestRate(currency: string) {
        return axios.get(`${this.baseUrl}convert?to=USD&from=${currency}&amount=1`, {
            headers: {
                'apiKey': `${process.env.FIXER_ACCESS_KEY}`
            }
        });
    }
}