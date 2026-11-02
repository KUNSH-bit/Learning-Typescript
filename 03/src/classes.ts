abstract class TakePhoto {
  constructor(
      public Mode: string, public filter: string, public burst: number) {}
  abstract getSepia(): void;
  getReelTime(): number {
    // complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
      public Mode: string, public filter: string, public burst: number) {
    super(Mode, filter, burst);
  }
  getSepia(): void {
    console.log('Sepia');
  }
}  // cant use implements here

const k = new Instagram('test', 'Test', 3)

k.getReelTime()
