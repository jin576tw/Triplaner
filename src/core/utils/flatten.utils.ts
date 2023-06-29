/**
 * 扁平化陣列
 * @param array
 * @param childKey 子陣列欄位
 * @returns
 */
export function flatten<T extends Record<string, any>>(
  array: T[],
  childKey: keyof T
): T[] {
  return array.reduce<T[]>(
    (a, b) =>
      Array.isArray(b[childKey]) && b[childKey].length
        ? [...a, b, ...flatten<T>(b[childKey], childKey)]
        : [...a, b],
    []
  );
}
