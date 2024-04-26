export interface ProfileSchema {
    isLoading: boolean,
    error?: string,
    score: number;
    date: string,
    data: Result[]
}
export interface Result {
    score: number,
    testDate: string
}
