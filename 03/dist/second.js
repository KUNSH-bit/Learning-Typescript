class Instagram {
    constructor(Mode, filter, burst) {
        this.Mode = Mode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(Mode, filter, burst, short) {
        this.Mode = Mode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log('Story created');
    }
}
export {};
//# sourceMappingURL=second.js.map