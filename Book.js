/*
You are reading a book and want to get to a certain page number inside that book since you forgot 
where you left it, count how many page turns you have to do untill you reach the desired page.
    - Take note that opening the book doesn't count as a page turn, and when opened, the right side of the page
      is always page 1.
    - When flipped, page 2 and 3 are in view, so that's pageTurns = 1, when flipped again pages 4 and 5 are in 
      view, so that's pageTurns = 2
    - Every page, except first and last are always printed on both sides.
    - The book is n pages long and you want to turn to page p
    - Input: 
        - n: number of pages in book
        - p: page you want to get to
        - Constraints: 1 <= n <= 10^5, 1 <= p <= n
    4. Output: number of page turns
*/

/*
    Considerations: Par numbers are always in left view, so it requires a flip. Thus, for p as 
    a pair number, the page turns required can be expressed as pageTurns=p/2. 
    For p as an odd number greater than 1, the flips requiered are the same as the previous pair number.
*/
let n=11; //Declaration of n as the number of pages in teh book. Assigning a value.
let p=11; //Declaration o p as the page number i want to get to. Assigning a value.
let pageTurns;//Declaration of pageTurns as the page turns necessary to get from page 1 to page n.
if (1<=n<Math.pow(10,5)){//Checking if n is in the constraints stated.
    if(1<p && p<=n){ //Checking if p in the constraints stated
        if(p%2===0){ //Checking if p is pair
            pageTurns=p/2;
        }else{ //If p is odd
            pageTurns=(p-1)/2;
        }
        console.log(`El numero de hojeadas necesarias son ${pageTurns}`);
    }else{console.log("Ingrese un número de página válido")}
}else{console.log("Ingrese un número de páginas válido")}
