import { StateSchema } from "app/providers/storeProvider/config/stateShema";


export const getTasks = (state: StateSchema) => {
    return state?.stack?.data?.map(stack => stack.tasks); // Возвращаем массив всех tasks из всех объектов типа 'Stacks'
}