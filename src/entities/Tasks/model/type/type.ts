export interface TasksSchema {
    data?: Task[],
    isLoading: boolean,
    error?: string, 
}

export interface Task{
    "courseId": number,
    "courceName": string,
    "description": string,
    "task": string,
}