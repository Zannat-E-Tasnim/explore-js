function explain_callback(name,age,task){
    console.log('Hello', name);
    console.log('your age',age);
    task();
}

function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function scrollFcaebook(){
    console.log('Scroll facebook but dont like post');
}

explain_callback('Sogir Uddin',10,washHand);
explain_callback('Jogir Uddin',15,takeShower);
explain_callback('Mogir Uddin',15,scrollFcaebook);