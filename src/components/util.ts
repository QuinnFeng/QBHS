export const randomSevenDigits=()=>{
    return Math.floor(1000000 + Math.random() * 9000000);
}

export const formattedDate=(inputDate:string)=>{
    const dateParts = inputDate.split('/');
    return dateParts[2] + "年" + dateParts[0].padStart(2, '0') + "月" + dateParts[1].padStart(2, '0') + "日";
}