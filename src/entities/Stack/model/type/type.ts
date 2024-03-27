export interface StackSchema {
    data?:  Stacks[],
    isLoading: boolean,
    error?: string, 
}

export interface Stacks {
    "id": number,
    "title": string,
    "description": string,
    "links"?: Links[],
    "tasks"?: Tasks[],
}
export interface Tasks {
    "answers"?: Answer[],
    "description": string,
    "id": number
}

export interface Answer {
    "id": number,
    "status": boolean,
    "answer": string
}

export interface Links {
    "id": number,
    "title": string,
    "url": string
}