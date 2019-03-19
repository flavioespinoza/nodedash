"use strict";
class Events {
    static on(event) {
        return { name: event.name, data: event.data };
    }
    static emit(event) {
        return { name: event.name, data: event.data };
    }
}
//# sourceMappingURL=Events.js.map