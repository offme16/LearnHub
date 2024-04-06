export interface ProfileSchema {
    isLoading: boolean,
    error?: string,
    score: { [key: string]: number };
    date: string,
}
