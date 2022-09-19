import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import { ITraceRequest } from '../types/IpRequestType';

const ipApiService = new IpAPIService()

class TracesController {
    dummy(req: Request, res: Response) {
        res.send('dummy')
    }

    async getIPTrace(req: ITraceRequest, res: Response) {
        //  TODO: Check API format
        const { ip } = req.body;
        if (!ip) return;

        const apiResponse = await ipApiService.getIpData(ip);

        return res.send(apiResponse.data)
    }
}

export default TracesController;