export { };

declare global {
  interface String {
    isNullishOrEmpty(this: string): boolean;
  }

  interface Array<T> {
    isNullishOrEmpty(this: Array<T>): boolean;
    emptyIfNullish(this: Array<T>): Array<T>;
  }

  interface Number {
    isPositive(this: number): boolean;
    isNegative(this: number): boolean;
  }

  /**
   *
   * @param arr an Array
   * @returns the original array or an empty array if arr is null or undefined
   */
  function emptyIfNullish<T>(arr: Array<T>): Array<T>;
}
