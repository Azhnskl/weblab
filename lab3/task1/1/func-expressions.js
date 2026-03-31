function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello 

//--------------------------------------------------------------------------

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

//---------------------------------------------------------------------------

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

yes() // → showOk()
no() // → showCancel()


