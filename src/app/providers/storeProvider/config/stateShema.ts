 import { AuthSchema } from 'entities/Authorization';
import { ProfileSchema } from 'entities/Profile';
import { RegistSchema } from 'entities/Registration';
import { StackSchema } from 'entities/Stack';
import { TasksSchema } from 'entities/Tasks';
import { UserSchema } from 'entities/User';
import { VacancySchema } from 'entities/Vacancy';

export interface StateSchema {
    task: TasksSchema;
    stack: StackSchema;
    auth: AuthSchema;
    regist: RegistSchema;
    profile: ProfileSchema;
    user: UserSchema;
    vacancy: VacancySchema;
}

export type StateSchemaKey = keyof StateSchema;