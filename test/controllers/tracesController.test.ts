import TracesController from "../../src/controllers/tracesController";
import { ITraceRequest } from "../../src/types/IpRequestType";
import { Request, Response } from 'express';
import IpAPIService from "../../src/services/ipApiService";
import { getMockReq, getMockRes } from '@jest-mock/express'



jest.mock('axios', () => {
    return {
      create: jest.fn(() => ({
        get: jest.fn(),
        post: jest.fn(),
        interceptors: {
          request: { use: jest.fn(), eject: jest.fn() },
          response: { use: jest.fn(), eject: jest.fn() }
        }
      }))
    }
})

describe('TracesController', () => {

    it('getIPTrace function should exists', () => {
        const tracesController = new TracesController();
        expect(tracesController.getIPTrace).toBeTruthy();
    });

    it('getIPTrace function should return', async () => {
        const tracesController = new TracesController();

        const req  = { 
            body: {
                // ip: '124.48.0.1'
            }
        } as ITraceRequest;

        const res = {
            status: jest.fn(),
            send: jest.fn()
        } as any;

        try {
            await tracesController.getIPTrace(req, res);
            expect(tracesController.getIPTrace).toHaveReturned();
        } catch(e) {
            expect(e).toBe(null);
        }
    });
});
