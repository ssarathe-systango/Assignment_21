function pow_of_2(num){
    if(num !==0 && num > 0)
    {
    if(typeof num !== 'number')
        return 'Not a number';
    return num && (num & (num - 1)) === 0;
    }
    else{
     return false;
    }
}
// console.log(pow_of_2(8));
// console.log(pow_of_2(18));
// console.log(pow_of_2(16));
// console.log(pow_of_2(64));

alert(pow_of_2(8));
alert(pow_of_2(18));
alert(pow_of_2(16));
alert(pow_of_2(64));


