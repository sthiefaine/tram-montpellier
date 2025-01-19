if (!Object.groupBy) {
  Object.defineProperty(Object, "groupBy", {
    value: function groupBy<T, K extends keyof any>(
      array: T[],
      keySelector: (item: T) => K
    ): Record<K, T[]> {
      return array.reduce((acc, item) => {
        const key = keySelector(item);
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {} as Record<K, T[]>);
    },
    writable: true,
    configurable: true,
  });
}
