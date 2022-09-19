import { Request, Response } from 'express';
import IpAPIService from '../services/ipApiService';
import FixerService from '../services/fixerService';
import { ITraceRequest, ITraceResponse } from '../types/IpRequestType';
import { TraceModel } from '../models/trace';

export default class StatisticsController {

    async getStatistics(req: Request, res: Response) {
        const allStats = await (await TraceModel.aggregate().group({ _id: '$country', count: { $sum: 1 } })).pop()

        res.send({
            most_traced: {
                country: allStats._id,
                value: allStats.count
            }
        });
    }

}