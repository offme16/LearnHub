 import { AuthSchema } from 'entities/Authorization';
import { RegistSchema } from 'entities/Registration';
import { StackSchema } from 'entities/Stack';
import { TasksSchema } from 'entities/Tasks';

export interface StateSchema {
    task: TasksSchema;
    stack: StackSchema;
    auth: AuthSchema;
    regist: RegistSchema;
}

export type StateSchemaKey = keyof StateSchema;