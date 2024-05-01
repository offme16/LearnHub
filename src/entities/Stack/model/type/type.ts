export interface StackSchema {
    data?:  Stacks[],
    isLoading: boolean,
    error?: string, 
}

export interface Stacks {
    "courseID": number,
    "title": string,
    "description": string,
    "links": [],
}
