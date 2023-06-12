/*
- Write a function that prints a staircase according to the specs bellow
- Input: n Where 0 < n <= 100
- Output: A staircase of any special symbol (#, @, *, &, !, etc) right aligned composed of height n and width n
*/
let n=6;//Declare n and asigning a value
let level=[]; //Declare empty array
if(n>0 && n<=100){//Checking 0<n<=100
    for(let j=1;j<=n;j++){  //loop for level of the stair
        for(let i=0;i<n;i++){ //loop for the content of the stair (drawing the steps)
            if (i<n-j){
                level[i]=" ";
            }else{level[i]="#"}
        }
        console.log(level);
    }
} else {
    console.log ("Escriba un número mayor a cero y menor a cien");
}
