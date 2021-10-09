export { };

Number.prototype.isPositive = function (this: number) {
  return this > 0;
}

Number.prototype.isNegative = function (this: number) {
  return !this.isPositive();
}
