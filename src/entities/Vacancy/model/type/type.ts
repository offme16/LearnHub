export interface VacancySchema {
    vacancy: Items[],
    isLoading: boolean,
    error?: string, 
}
export interface Items {
    id: number,
    name: string,
    alternate_url: string,
    experience: Experience,
    snippet: Snippet
}
export interface Experience {
    id: string,
    name: string
}
export interface Snippet {
    requirement: string,
    responsibility: string
}

