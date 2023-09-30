//Program 1:Prime or Not
let arr2=[10,20,30,40,50]
let count1=0
for(let j=2;j<=arr2[0]/2;j++){
    if(arr2[0]%2==0)
    count1++
}
if(count1==0)
console.log("Prime")
else
console.log("Not Prime")
//Program 2: Frequency of elements

let arr = [1, 2, 3, 1, 5, 7, 5, 5, 9 ];
       
      
      let n = arr.length;
      let count = 0;
      let num= 0;
       
     
      for (let i = 0; i < n; i++){
         let c = 0;
         for (let j = 0; j < n; j++){
            if (arr[i] == arr[j]){
               c++;
            }
         }
        
         if (c > count){
            count = c;
            num = arr[i];
         }
      }
      console.log("Frequent Item : "+num)
      console.log("Number of Occurence: "+count)

      //Program 3 Odd or Even

      for(let i=0;i<=15;i++){
        if(i%2==0)
        console.log(i+" is Even")
        else
        console.log(i+"  is ODD")
      }
      
      //Program 4 :Sum of Squares
      let arr1=[30,30,40]
      let result=0

      for(let i=0;i<arr1.length;i++)
      {
        result=result+arr1[i]*arr1[i]
      }
      console.log("Sum of squaresof Element: "+result)
