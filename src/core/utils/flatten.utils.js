/**
 * 扁平化陣列
 * @param array
 * @param childKey 子陣列欄位
 * @returns
 */
export function flatten(array, childKey) {
  return array.reduce(
    (a, b) =>
      Array.isArray(b[childKey]) && b[childKey].length
        ? [...a, b, ...flatten(b[childKey], childKey)]
        : [...a, b],
    []
  );
}
