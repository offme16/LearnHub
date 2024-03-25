export interface TasksSchema {
    data?: Task[],
    isLoading: boolean,
    error?: string, 
}

export interface Task{
    "courseId": number,
    "title": string,
    "description": string,
    "task": string,
}