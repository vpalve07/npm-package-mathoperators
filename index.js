function add(arr){
    let res = [...arr]
    return res.reduce((acc,val)=>acc+val)
}

function sub(arr){
    let res = [...arr]
    return res.reduce((acc,val)=>acc-val)
}

function mul(arr){
    let res = [...arr]
    return res.reduce((acc,val)=>acc*val)
}

function div(arr){
    let res = [...arr]
    return res.reduce((acc,val)=>acc/val)
}

function sort(arr){
    let res = [...arr]
    return res.sort((a,b)=>a-b)
}

module.exports = {add,sub,mul,div,sort}