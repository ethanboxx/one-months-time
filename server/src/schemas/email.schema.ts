import * as mongoose from 'mongoose';

export const EmailSchema = new mongoose.Schema({
  email: String,
  content: String,
  sendAfter: Number,
});
