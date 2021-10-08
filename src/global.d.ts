export {};

declare global {
  interface String {
    isNullOrEmpty(this: string): boolean;
  }

  interface Array<T> {
    isNullOrEmpty(this: Array<T>): boolean;
    emptyIfNull(this: Array<T>): Array<T>;
  }

  /**
   *
   * @param arr an Array
   * @returns the original array or an empty array if arr is null or undefined
   */
  function emptyIfNull<T>(arr: Array<T>): Array<T>;
}
