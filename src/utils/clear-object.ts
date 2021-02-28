export interface GenericObject {
  [key: string]: any;
}

/**
 * Remove undefined, null, empty strings and NaNs from a object
 */

export function clearObject<T = any>(value: any): T {
  Object.keys(value).map((key) => {
    if (
      value[key] &&
      !Array.isArray(value[key]) &&
      typeof value[key] === 'object'
    ) {
      clearObject(value[key]);
    } else if (
      value[key] === null ||
      value[key] === undefined ||
      value[key] === '' ||
      (typeof value[key] === 'number' && isNaN(value[key]))
    ) {
      delete value[key];
    }
  });
  return value;
}
