export interface StackSchema {
    data?:  Stacks[],
    isLoading: boolean,
    error?: string, 
}

export interface Stacks {
    "courseID": number,
    "title": string,
    "description": string,
    "links"?: Links[],
}

export interface Links {
    "id": number,
    "title": string,
    "url": string
}