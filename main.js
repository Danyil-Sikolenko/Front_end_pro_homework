function request () {
    let userInput;
    for(let i = 0; i < 10; i++) {
      userInput = +prompt('Write numbers')
      if(userInput >= 100 ) {
          break;
        }
    }
    console.log('Останнє введене число', userInput )
  
  }
  request();