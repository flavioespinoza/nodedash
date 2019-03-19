class Events {
    static on(event: { name: string; data: object }) {
        return { name: event.name, data: event.data };
    }
    static emit(event: { name: string; data: object }) {
        return { name: event.name, data: event.data };
    }
}
