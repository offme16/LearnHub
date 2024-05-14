export interface StackSchema {
    data?:  Stacks[],
    isLoading: boolean,
    error?: string,
    Url: UrlStack[],  
}

export interface Stacks {
    "courseID": number,
    "title": string,
    "description": string,
    "links": [],
}

export interface UrlStack {
    "id": number,
    "name": string,
    "resources": Resourse[],
    "color": string
}
export interface Resourse {
    "title": string,
    "link": string,

}