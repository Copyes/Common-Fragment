/**
 * trim the blank,
 * 1 去除所有的空格
 * 2 去除两边空格
 * 3 去除左边的宫格
 * 4 去除右边的空格
 * @param {*} str 
 * @param {*} type 
 */
const trim = (str, type) => {
    switch(type){
        case 1:
            return str.replace(/\s+/g, '')
        case 2:
            return str.replace(/(^\s*)|(\s*$)/, '')
        case 3:
            return str.replace(/(^\s*)/, '')
        case 4:
            return str.replace(/(\s*$)/, '')
        default: 
            return str
    }
}

/**
 * 1: 首字母大写
 * 2：首页母小写
 * 3：大小写转换
 * 4：全部大写
 * 5：全部小写
 * @param {*} str 
 * @param {*} type 
 */
const changeCase = (str, type) => {
    function toggleCase(str){
        var tempStr = ''
        str.split('').forEach(function(item){
            if(/^([a-z]+)/.test(item)){
                tempStr += item.toUpperCase()
            } else if(/^([A-Z]+)/.test(item)){
                tempStr += item.toLowerCase()
            } else {
                tempStr += item
            }
        })
        return tempStr
    }
    switch(type){
        case 1:
            return str.replace(/\b\w+\b/g, function(word){
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
            }) 
        case 2:
            return str.replace(/\b\w+\b/g, function(word){
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
            })  
        case 3:
            return toggleCase(str)
        case 4:
            return str.toUpperCase()
        case 5:
            return str.toLowerCase()
        default:
            return str
    }
}
/**
 * 替换所有的匹配字符串
 * @param {*} str 
 * @param {*} reg 正则
 * @param {*} regText 
 */
const replaceAll = (str, reg, regText) => {
    reg = new RegExp(reg, 'g')
    return str.replace(reg, regText)
}
/**
 * 查找子串出现的次数
 * @param {*} str 
 * @param {*} subStr 
 */
const findSubString = (str, subStr) => {
    return str.split(subStr).length - 1
}
/**
 * 返回对应进制的随机字符串
 * @param {*} count 
 */
const randomWord = (count) => {
    return Math.random().toString(count).substring(2)
}
