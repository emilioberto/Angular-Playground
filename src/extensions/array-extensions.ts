export { }; // this file needs to be a module

Array.prototype.isNullOrEmpty = function <T>(this: Array<T>): boolean {
  return this === null || this?.length === 0;
};


globalThis.emptyIfNull = function <T>(arr: Array<T>): Array<T> {
  return (arr === null || arr === undefined)
    ? []
    : arr;
}
