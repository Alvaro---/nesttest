import { Schema } from 'mongoose';

export const tastsSchema = new Schema({
  nombre: String,
  description: String,
  done: Boolean,
});