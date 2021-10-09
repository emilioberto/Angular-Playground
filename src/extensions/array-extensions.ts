export { }; // this file needs to be a module

Array.prototype.isNullishOrEmpty = function <T>(this: Array<T>): boolean {
  return this === null || this?.length === 0;
};
