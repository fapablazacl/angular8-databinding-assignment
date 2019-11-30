
export class GameStatus {
    public constructor(public tickCount : number) {}

    public isEven() : boolean {
        return this.tickCount % 2 === 0;
    }
}
