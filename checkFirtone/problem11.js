function ArrCreat(arr){
  
    for(let i=0;i<=arr.length-1;i++){
      let a=""
      for(let j=0;j<arr[i].length;j++){
        a+=arr[i][j]+" "
       // console.log(arr[i][j])
      }
      
      console.log(a)
    }
  }
  ArrCreat([[1,2],[3,4],[5,6]])