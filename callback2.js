function welcomeGuest(name,greet){
    greet(name);
}
function greetMorning(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
welcomeGuest('Tasnim',greetMorning);
welcomeGuest('Tasnim',greetEvening);
welcomeGuest('Tasnim',function(name){     //anonymous function
    console.log('Special Welcome',name);     
});