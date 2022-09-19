import axios from 'axios';

class IpAPIService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'http://ip-api.com/json/';
    }

    getIpData(ip: string) {
        return axios.get(`${this.baseUrl}${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,as,query`);
    }
}

export default IpAPIService;