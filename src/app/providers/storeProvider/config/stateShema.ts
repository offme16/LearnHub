 import { AuthSchema } from 'entities/Authorization';
import { ProfileSchema } from 'entities/Profile';
import { RegistSchema } from 'entities/Registration';
import { StackSchema } from 'entities/Stack';
import { TasksSchema } from 'entities/Tasks';

export interface StateSchema {
    task: TasksSchema;
    stack: StackSchema;
    auth: AuthSchema;
    regist: RegistSchema;
    profile: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;