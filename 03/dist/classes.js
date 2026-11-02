class TakePhoto {
    constructor(Mode, filter, burst) {
        this.Mode = Mode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        // complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(Mode, filter, burst) {
        super(Mode, filter, burst);
        this.Mode = Mode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
} // cant use implements here
const k = new Instagram('test', 'Test', 3);
k.getReelTime();
export {};
//# sourceMappingURL=classes.js.map