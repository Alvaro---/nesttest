import {Document} from "mongoose";

export interface Task extends Document{
  id?: number;
  nombre: string;
  description: string;
  done: boolean;
}
