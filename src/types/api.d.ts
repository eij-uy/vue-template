declare namespace API {
  interface PageReq {
    page: number
    limit: number
  }

  interface PageRes<T> {
    list: T[]
    currentPage: number
    pageSize: number
    totalCount: number
    totalPage: number
  }

  interface ResultData<T = any> {
    code: number
    data: T
    message: string
    description: string
  }
}
