function leapYear(year){
    if(year%400==0 || (year%4==0 && year%100!=0)){
        console.log(year, " Leap Year");
    }
    else{
        console.log(year, " Not Leap Year");
    }
    
}
leapYear(1700);
leapYear(1800);
leapYear(1900);
leapYear(2000);


