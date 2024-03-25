 import { StackSchema } from 'entities/Stack';
import { TasksSchema } from 'entities/Tasks';

export interface StateSchema {
    task: TasksSchema;
    stack: StackSchema;
}

export type StateSchemaKey = keyof StateSchema;