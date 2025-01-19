interface ObjectConstructor {
  groupBy<T, K extends keyof any>(
    array: T[],
    keySelector: (item: T) => K
  ): Record<K, T[]>;
}
