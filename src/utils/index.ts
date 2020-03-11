import ramdaBaseUtils from './ramdaBaseUtils'
import arr from './arr'

const isTruthy = (v: any) => !(v === undefined || v === null)
const isNaN = (v: any) => typeof v === 'number' && Number.isNaN(v)

export default { ...ramdaBaseUtils, isTruthy, isNaN, arr }
