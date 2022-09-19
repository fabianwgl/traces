import { Request, Response } from 'express';

interface IBody {
    ip: string
}
interface ITraceRequest extends Request {
    body: IBody
}

export { ITraceRequest };