console.log("Timing Starts");
function times(){
  let i = 0;  
  setInterval(() =>{
     console.log("I am " + i + "!");
     i++;
  },1000)
  console.log("I am done !")
}

times();