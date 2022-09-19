import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import FixerService from '../services/fixerService';
import { ITraceRequest, ITraceResponse } from '../types/IpRequestType';
import { TraceModel } from '../models/trace';
import { Get, Route, Post, Body } from "tsoa";

const ipApiService = new IpAPIService();
const fixerService = new FixerService();

interface traceCreation {
    ip: string
}

@Route("traces")
export default class TracesController {
    constructor() {
        this.getIPTrace = this.getIPTrace.bind(this);
    }

    dummy(req: Request, res: Response) {
        res.send('dummy');
    }

    private async handleIPTrace( ip: string): Promise<ITraceResponse> {
        //  TODO: Refactor into "business" layer
        const apiResponse = await ipApiService.getIpData(ip);
        if(apiResponse.data.status !== 'success') throw new Error('Error encountered with the provided IP')

        const rates = await fixerService.latestRate(apiResponse.data.currency);

        const response = {
            ip: apiResponse.data.query,
            name: apiResponse.data.country,
            code: apiResponse.data.countryCode,
            lat: apiResponse.data.lat,
            lon: apiResponse.data.lon,
            currencies: [
                {
                    iso: apiResponse.data.currency,
                    conversion_rate: rates.data.info.rate
                }
            ]
        } as ITraceResponse;

        const trace = new TraceModel({
            country: response.name,
            ip: response.ip
        });

        //  Don't await saving to release response execution
        trace.save();
        
        return response;
    }

    async getIPTrace(req: ITraceRequest, res: Response) {
        //  TODO: Check API format
        const { ip } = req.body;

        //  TODO: Refactor into custom error responses
        if (!ip) return res.status(400).send('Missing IP');

        try {
            const response = await this.handleIPTrace(ip);
            res.send(response);
        } catch(e) {
            console.log({e})
            res.status(400).send(e);
        }
    }
}