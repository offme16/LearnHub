export interface TasksSchema {
    data?: Task[],
    isLoading: boolean,
    error?: string, 
}

export interface Task{
    "id": number,
    "courseid": number,
    "description": string,
    "answers"?: Answer[],
}

export interface Answer {
    "id": number,
    "status": number,
    "answer": string
}