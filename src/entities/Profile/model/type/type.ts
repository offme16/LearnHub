export interface ProfileSchema {
    isLoading: boolean,
    error?: string,
    data?: Data[],
}
interface Data {
    score: number,
    date: string,
}