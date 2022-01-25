/*

Benefits of Promises 
1.Improves Code Readability
2.Better handling of asynchronous operations
3.Better flow of control definition in asynchronous logic
4.Better Error Handling
  A Promise has four states: 
1.fulfilled: Action related to the promise succeeded
2.rejected: Action related to the promise failed
3.pending: Promise is still pending i.e. not fulfilled or rejected yet
4.settled: Promise has fulfilled or rejected

*/
var promise = new Promise(function(resolve, reject) {
    const x = "Anand";
    const y = "Raj"
    if(x !== y) {
      resolve("The promise is resolved");
    } else {
      reject("The promise is rejected");
    }
  });
     
  promise.
      then(function (successMessage) {
          console.log(successMessage);
      }).
      catch(function (successMessage) {
        console.log(successMessage);
      });

