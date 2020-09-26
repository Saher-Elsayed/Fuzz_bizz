main = ()=> {
 for(let i = 1;i < 101;i++)
  {
      if(i%3 ===0 && i% 5 ===0){
        chalk.print("fizzbuzz")
      }
     else if(i%3===0){
       chalk.print("fizz")
     }
     else if (i%5===0) {
       chalk.print("Buzz")
     }
     else {
       chalk.print(i)
     }
  }
}
