export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const cloneObj = (Array.isArray(obj) ? [] : {}) as T

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }

  return cloneObj
}
