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

function modulus(arr){
    let res = [...arr]
    return res.reduce((acc,val)=>acc%val)
}

function pow(arr){
    let res = [...arr]
    return res.reduce((a,b)=>a**b)
}

function sort(arr){
    let res = [...arr]
    return res.sort((a,b)=>a-b)
}

function revSort(arr){
    let res = [...arr]
    return res.sort((a,b)=>b-a)
}

module.exports = {add,sub,mul,div,modulus,pow,sort,revSort}