export interface TasksSchema {
    data?: Task[],
    isLoading: boolean,
    error?: string, 
}

export interface Task{
    "id": number,
    "description": string,
    "answers"?: Answer[],
}

export interface Answer {
    "id": string,
    "status": number,
    "answer": string
}