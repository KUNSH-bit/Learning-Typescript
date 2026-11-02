interface TakePhoto {
  Mode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
      public Mode: string, public filter: string, public burst: number) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
      public Mode: string, public filter: string, public burst: number,
      public short: string) {}

  createStory(): void {
    console.log('Story created');
  }
}

interface Story {
  createStory(): void;
}