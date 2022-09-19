import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import FixerService from '../services/fixerService';
import { ITraceRequest, ITraceResponse } from '../types/IpRequestType';
import { TraceModel } from '../models/trace';
import { Get, Route } from "tsoa";


interface StatisticsResposne {
    most_traced: {
        country: string,
        value: number
    }        
}

@Route('statistics')
export default class StatisticsController {
    constructor() {
        this.getStatistics = this.getStatistics.bind(this);
    }

    async getStatistics(req: Request, res: Response) {
        try {
            const response = await this.handleStatistics();
            res.send(response);
        } catch(e) {
            res.status(400).send(e);
        }
    }

    @Get('/')
    async handleStatistics(): Promise<StatisticsResposne> {
        const allStats = await (await TraceModel.aggregate().group({ _id: '$country', count: { $sum: 1 } })).pop()
        return {
            most_traced: {
                country: allStats._id,
                value: allStats.count
            }
        }
    }

}