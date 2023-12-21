export const is = (data: unknown) => Object.prototype.toString.call(data)

export const _is = <T>(type: string) => {
  return (data: unknown): data is T => {
    return Object.prototype.toString.call(data) === type
  }
}

export const isString = _is<string>('[object String]')

export const isArray = <T = any>() => _is<Array<T>>('[object Array]')

export const isObject = _is<object>('[object Object]')

export const isNumber = _is<number>('[object Number]')

export const isBoolean = _is<boolean>('[object Boolean]')

export const isNull = _is<null>('[object Null]')

export const isUndefined = _is<undefined>('[object Undefined]')

export const isSymbol = _is<symbol>('[object Symbol]')

export const isDate = _is<Date>('[object Date]')

export const isRegExp = _is<RegExp>('[object RegExp]')

export const isError = _is<Error>('[object Error]')

export const isPromise = <T = any>() => _is<Promise<T>>('[object Promise]')

export const isSet = <T = any>() => _is<Set<T>>('[object Set]')

export const isMap = <T = any, K = any>() => _is<Map<T, K>>('[object Map]')

export const isNil = (data: unknown): data is null | undefined => isNull(data) || isUndefined(data)

export const isEmpty = (data: unknown): boolean => {
  if (data == null) return true
  if (typeof data === 'boolean') return false
  if (typeof data === 'number') return !data
  if (data instanceof Error) return data.message === ''

  switch (is(data)) {
    case '[object String]':
    case '[object Array]': {
      return !(data as any).length
    }
    case '[object Set]':
    case '[object Map]':
    case '[object File': {
      return !(data as any).size
    }
    case '[object Object]': {
      return !Object.keys(data as object).length
    }
  }
  return false
}

export const isNotEmpty = (data: unknown) => !isEmpty(data)

export const generateIsBlanks = (getItem: (item: any, index: number) => any) => {
  return (...args: any[]): boolean => {
    for (let i = 0; i < args.length; i++) {
      if (isEmpty(getItem(args[i], i))) return true
    }
    return false
  }
}

export const generateIsAllBlanks = (getItem: (item: any, index: number) => any) => {
  return (...args: any[]): boolean => {
    for (let i = 0; i < args.length; i++) {
      if (isNotEmpty(getItem(args[i], i))) return false
    }
    return true
  }
}

/**
 * 只要有一个为空就返回true
 */
export const isBlanks = generateIsBlanks((item) => item)

/**
 * 全部都为空才返回true
 */
export const isAllBlanks = generateIsAllBlanks((item) => item)

export const isWX = () => window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1

export const isIOS = () => /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)

export const isAndroid = () => /Android/i.test(window.navigator.userAgent)

export const isWindow = (target: unknown) => target === window
