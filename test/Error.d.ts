declare class Error {
    method: string;
    err: string;
    constructor(method: string, err: any);
    private _mapError;
    _handle(): {
        success: boolean;
        method: string;
        info: string;
    };
}
export { Error };
