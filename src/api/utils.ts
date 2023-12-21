export const createIsCodeFactory = (compareCode: number) => {
  return (code: number) => {
    return Number(code.toString().substring(0, 3)) === compareCode
  }
}

export const isSuccess = createIsCodeFactory(200)

export const isFrontError = createIsCodeFactory(400)

export const isNoAuth = createIsCodeFactory(401)

export const isBackError = createIsCodeFactory(500)
