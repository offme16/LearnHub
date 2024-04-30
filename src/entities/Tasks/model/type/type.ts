export interface TasksSchema {
    data: Data, // изменили тип с Data[] на Data
    isLoading: boolean,
    error?: string,
    userCourseID: number
}

export interface Data {
    "courseID": number, // изменили название свойства с "courseid" на "courseID"
    "title": string | null, // добавили свойство "title"
    "description": string | null, // добавили свойство "description"
    "tasks": Task[], // изменили тип с Tasks[] на Task[]
    "links": null, // добавили свойство "links"
}

export interface Task {
    "taskId": number,
    "description": string,
    "answers": Answer[], // изменили тип с Answer[]? на Answer[]
}

export interface Answer {
    "resultID": number,
    "status": number,
    "answer": string,
    "task": null, // добавили свойство "task"
}