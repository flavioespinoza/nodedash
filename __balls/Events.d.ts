declare class Events {
    static on(event: {
        name: string;
        data: object;
    }): {
        name: string;
        data: object;
    };
    static emit(event: {
        name: string;
        data: object;
    }): {
        name: string;
        data: object;
    };
}
