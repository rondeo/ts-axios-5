/**
 * 工具辅助方法
 */
const toString = Object.prototype.toString
// 是否是日期类型
export function isDate(val: any): val is Date {
  // val is Date 谓词保护
  return toString.call(val) === '[object Date]'
}

export function isObejct(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
