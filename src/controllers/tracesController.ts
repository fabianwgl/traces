import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import FixerService from '../services/fixerService';
import { ITraceRequest, ITraceResponse } from '../types/IpRequestType';
import { TraceModel } from '../models/trace';

const ipApiService = new IpAPIService();
const fixerService = new FixerService();

export default class TracesController {

    dummy(req: Request, res: Response) {
        res.send('dummy');
    }

    async getIPTrace(req: ITraceRequest, res: Response){
        //  TODO: Check API format
        const { ip } = req.body;
        //  TODO: Refactor into custom error responses
        if (!ip) return res.status(400).send('Missing IP');

        //  TODO: Refactor into "business" layer
        const apiResponse = await ipApiService.getIpData(ip);
        if(apiResponse.data.status !== 'success') return res.status(400).send('Problems parsing IP');

        const rates = await fixerService.latestRate(apiResponse.data.currency);

        const response = {
            ip: apiResponse.data.query,
            name: apiResponse.data.country,
            code: apiResponse.data.countryCode,
            lat: apiResponse.data.lat,
            long: apiResponse.data.lon,
            currencies: [
                {
                    iso: apiResponse.data.currency,
                    conversion_rate: rates.data.info.rate
                }
            ]
        }

        const trace = new TraceModel({
            country: response.name,
            ip: response.ip
        });

        //  Don't await saving to release response execution
        trace.save();

        return res.send(response)
    }
}