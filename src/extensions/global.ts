globalThis.emptyIfNullish = function <T>(arr: Array<T>): Array<T> {
  return (arr === null || arr === undefined)
    ? []
    : arr;
}
