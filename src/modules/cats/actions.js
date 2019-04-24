
export const filter = (p)=>{
    return {type:'FILTER_RESULTS', payload:p}
}



export const loading = ()=>{
    return {type:'LOADING'}
}

export const load = (catList,pageCount) =>{
 return {type:'LOAD' , payload:(catList,pageCount)}
}

export const notLoaded = (p) =>{
 return {type:'NOT_LOADED' , payload:p}
}