export class GlobalCounter {
  private value: number = 1;
  public get index(): number {
    return this.value;
  }
  public increase(): void {
    this.value++;
  }
}
