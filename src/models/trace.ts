import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ITrace {
    country: string;
    ip: string;
    distance: string;
}

// 2. Create a Schema corresponding to the document interface.
const traceSchema = new Schema<ITrace>({
    country: { type: String, required: true },
    ip: { type: String, required: true },
    distance: String
});

// 3. Create a Model.
const TraceModel = model<ITrace>('Trace', traceSchema);

export { TraceModel };
