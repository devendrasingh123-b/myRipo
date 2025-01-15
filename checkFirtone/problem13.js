function R(arr){

    for(let i=0;i<arr.length;i++){
      
      bag=" "
      
      if(i%2==0){
        for(let j=arr[i].length-1;j>=0;j--){
        
     bag+=arr[i][j]
        }
      }else {
        for(let j=0;j<arr[i].length;j++){
          bag+=arr[i][j]
        }
      }
      
      
      
      console.log(bag)
    }
    
    }
    
    R([[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]])