import { Request, Response } from 'express';

interface IBody {
    ip: string
}

interface ITraceRequest extends Request {
    body: IBody
}

interface ICurrencies {
    iso: string,
    // symbol: string,
    conversion_rate: string
}

interface ITraceResponse {
    ip: string,
    name: string,
    code: string,
    lat: string,
    lon: string,
    currencies: ICurrencies[],
    // distance_to_usa?: number
}

export { ITraceRequest, ITraceResponse };