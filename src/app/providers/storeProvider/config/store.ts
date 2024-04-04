import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateShema';
import { TaskReducer } from 'entities/Tasks';
import { StackReducer } from 'entities/Stack';
import { AuthReducer } from 'entities/Authorization';
import { RegistReducer } from 'entities/Registration';
import { ProfileReducer } from 'entities/Profile';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
         task: TaskReducer,
         stack: StackReducer,
         auth: AuthReducer,
         regist: RegistReducer,
         profile: ProfileReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']