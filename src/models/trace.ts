import { Schema, model, connect } from 'mongoose';

interface ITrace {
    country: string;
    ip: string;
    distance: string;
}

const traceSchema = new Schema<ITrace>({
    country: { type: String, required: true },
    ip: { type: String, required: true },
    distance: String
});

const TraceModel = model<ITrace>('Trace', traceSchema);

export { TraceModel };
