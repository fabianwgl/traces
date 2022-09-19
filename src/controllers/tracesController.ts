import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import { ITraceRequest, ITraceResponse } from '../types/IpRequestType';

const ipApiService = new IpAPIService()
export default class TracesController {

    dummy(req: Request, res: Response) {
        res.send('dummy');
    }

    async getIPTrace(req: ITraceRequest, res: Response){
        //  TODO: Check API format
        const { ip } = req.body;
        //  TODO: Refactor into custom error responses
        if (!ip) return res.status(400).send('Missing IP');

        const apiResponse = await ipApiService.getIpData(ip);

        const response = {
            ip: apiResponse.data.query,
            name: apiResponse.data.country,
            code: apiResponse.data.countryCode,
            lat: apiResponse.data.lat,
            long: apiResponse.data.lon,
            currency: [apiResponse.data.currency]
        }

        return res.send(response)
    }
}