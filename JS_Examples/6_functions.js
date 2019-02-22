function showMessage() {
    alert( 'Hello everyone!' );
  }


  showMessage();


  //params
  function showMessage(from, text) { // arguments: from, text
    alert(from + ': ' + text);
  }


  //function inside of a function
  function inny(){
      console.log('hello');
  }


  function outy(){
      console.log('i want reblobster')
      inny();
  }


  //return
  function returner(){
    let a = 1;
    return a;
  }



  let newtypeoffunction = () =>{
      console.log(`this is a preferred type of function to use!`);
  }