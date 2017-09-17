/**
 * 数组去重
 * @param {*} arr 
 */
const removeRepeatArray = (arr) => {
    return arr.filter(function(item, index, self){
        return self.indexOf(item) === index
    })
    // es6
    //return Array.from(new Set(arr))
}
/**
 * 选出数组中最大的数字
 * @param {*} arr 
 */
const maxValur = (arr) => {
    return Math.max.apply(null, arr)
}
/**
 * 选出数组中最小的数字
 * @param {*} arr 
 */
const minValue = (arr) => {
    return Math.min.apply(null, arr)
}