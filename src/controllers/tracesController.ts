import { Request, Response } from 'express';

class TracesController {
    dummy(req: Request, res: Response) {
        res.send('dummy')
    }
}

export default TracesController;