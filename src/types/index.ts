/**
 * 公共类型定义文件
 */
// 字符串字面量
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PATCH'

// 定义请求的配置接口
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
