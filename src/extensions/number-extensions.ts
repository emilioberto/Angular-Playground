export { };

Number.prototype.isPositive = function (this: number): boolean {
  return this > 0;
}

Number.prototype.isNegative = function (this: number): boolean {
  return !this.isPositive();
}
