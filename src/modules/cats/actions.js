export const changePage = (page)=>{
    return {type:'CHANGE_PAGE', payload:page}
}

export const filter = (p)=>{
    return {type:'FILTER_RESULTS', payload:p}
}