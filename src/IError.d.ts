export interface IError {
    method: string;
    err: string;
    _handle(): {
        success: boolean;
        method: string;
        info: string;
    };
}
