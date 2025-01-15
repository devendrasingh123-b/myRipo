function ArrCreat(arr){
  
    for(let i=0;i<=arr.length-1;i++){
      
      let b=" "
      for(let j=0;j<arr[i].length;j++){
        
      b+=(i+j)+" "    
      //console.log(i,j)
  
      }
      console.log(b)
      
    }
  }
  ArrCreat([[1,2],[3,4],[5,6]])