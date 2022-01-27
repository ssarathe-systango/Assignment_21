function Check_Leap_Year(year){
    if(year % 4 == 0){
        alert(year +' '+ 'Is a leap year');
    }
    else{
        alert(year + ' ' + 'Is not a leap year');
    }
}
const year = prompt('Enter a year');
Check_Leap_Year(year);




// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))