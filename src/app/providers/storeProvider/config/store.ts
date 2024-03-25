import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateShema';
import { TaskReducer } from 'entities/Tasks';
import { StackReducer } from 'entities/Stack';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
         task: TaskReducer,
         stack: StackReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']