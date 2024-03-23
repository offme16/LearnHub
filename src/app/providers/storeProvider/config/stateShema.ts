 import { TasksSchema } from 'entities/Tasks';

export interface StateSchema {
    task: TasksSchema;
}

export type StateSchemaKey = keyof StateSchema;