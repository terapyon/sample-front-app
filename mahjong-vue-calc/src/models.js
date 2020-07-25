export class Pi {
  constructor(pi, naki, dora) {
    this.pi = pi;
    this.nakiPiSets = naki; // 2;
    this.doraPiSets = dora; // [1];
  }
  get imagePath() {
    return `/img/pi/${this.pi}.png`;
  }
}
