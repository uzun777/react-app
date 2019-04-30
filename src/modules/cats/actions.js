
export const filter = (p)=>{
    return {type:'FILTER_RESULTS', payload:p}
}



export const loading = ()=>{
    return {type:'LOADING'}
}

export const load = (list,pageCount) =>{
 return {type:'LOAD' , payload:{list,pageCount}}
}

export const notLoaded = (error) =>{
 return {type:'NOT_LOADED' , payload:error}
}