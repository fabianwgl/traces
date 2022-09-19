import { connect } from 'mongoose';

export default async function run() {
  await connect(process.env.MONGODB_CONNECTION_STRING as string);
}