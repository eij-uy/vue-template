export enum CODE_ENUMS {
  /**
   * 成功
   */
  SUCCESS = 20000,

  /**
   * 参数错误
   */
  PARAMS_ERROR = 40000,

  /**
   * 未授权
   */
  NO_AUTH = 40100,

  /**
   * 未登录
   */
  NO_LOGIN = 40101,

  /**
   * 非法的 token
   */
  TOKEN_ERROR = 40102,

  /**
   * token 过期
   */
  TOKEN_EXPIRED = 40103,

  /**
   * 系统内部错误
   */
  SYSTEM_ERROR = 50000,

  /**
   * 未知错误
   */
  UNKNOW_ERROR = 50001,
}
