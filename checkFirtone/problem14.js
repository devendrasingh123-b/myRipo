function Star(N){
  
    for(let i=1;i<=N;i++){
      let bag=" "
      for(let j=1;j<=N;j++){
      
      if(i==1 ||j==1||i==N){
        bag+="* "
      }
      //bag+=i+","+j+"    "
        
      }
      console.log(bag)
    }
    
    
  }
  
  Star(5)