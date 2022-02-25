function listening(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
           // console.log("Resolving " + value);
            resolve(value);
        }, 5000);
    });
  }
  
  function test() {
      const promises = [];
      
      for (let i = 0; i < 5; ++i) {
          promises.push(listening(i));
      }
      
      Promise.all(promises)
          .then((results) => {
              console.log("All done", results);
          })
          .catch((e) => {
              // Handle errors here
          });
  }
  
  test();