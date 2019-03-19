declare function error(method: string, err: any): {
    success: boolean;
    method: string;
    info: string;
};
export { error as _error };
export default error;
