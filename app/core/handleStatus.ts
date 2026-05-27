export function handleColorStatus (status:"COMPLETED" | 'FAILED' | 'PENDING'){
    if (status === 'COMPLETED') return 'success.main'
    else if (status === 'FAILED') return 'error.main'
    else return 'warning.main'
}
export function handleTitleStatus (status:"COMPLETED" | 'FAILED' | 'PENDING'){
    if (status === 'COMPLETED') return 'تکمیل شده'
    else if (status === 'FAILED') return 'لغو شده'
    else return 'در انتظار'
}