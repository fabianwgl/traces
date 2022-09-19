import axios from 'axios';

class IpAPIService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'http://ip-api.com/json/';
    }

    getIpData(ip: string) {
        return axios.get(`${this.baseUrl}${ip}`);
    }
}

export default IpAPIService;