/**
 * url相关辅助函数
 */
import { isDate, isObejct } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === undefined) {
      return // forEach无法跳出，会进入下一循环
    }
    // 参数有可能是数组类型的,也有可能不是数组类型的，把两种情况统一为数组
    let values = []
    if (Array.isArray(val)) {
      values = val
      key = key + '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObejct(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)} = ${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')
  if (serializedParams) {
    const marIndex = url.indexOf('#')
    if (marIndex !== -1) {
      url = url.slice(0, marIndex)
    }
    url = url + (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
