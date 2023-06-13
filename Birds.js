/*
Birds in migration
- You are watching birds migrate in the country, taking notes on the different types of birds you encounter 
by setting their ID on an array. If more than 1 type has been spotted that maximum amount, return the smallest 
of their IDs.
 - Constrints: 2 < arr <= 2x10^5, where ```n``` inside the array is 0 < n <= 5
 Example:
    - Input: ```arr[4,4,2,2,3]``` 
    - Output: Type: 2
        - Type 4 and 2 have two ocurrences (the maximum in the array), but 2 is the smallest of their IDs, 
        so return 'Type: 2'
*/
let birdsID=[];//Declaring  birds incidence array 
birdsID=[3,5,4,1,2,3,4,5]//Filling the array 
let indexPause;//Declaring index pause to use a pause point for coincidences
let comparativeCounter=0;//Declaring an auxiliar counter for comparing past coincidenses with new coincidences
let type; //Declaring type to save the most repeated type
let search;
for(let i=0; i<birdsID.length; i++){// Cicle to travel across the array
    let listLeft=birdsID; //For each new index list left returns to be the same as birdsID
    let moda=0;//For each new index moda returns to zero.
    search=birdsID[i];//Declare search as the variable used to save the ID we are looking for.
   do{
    indexPause=listLeft.indexOf(search)//Founding a coincidence of a bird ID
    console.log(indexPause);
    console.log(search);
        if(indexPause>=0){ //Checking out if there is a coincidence
            moda++; //If there's a coincidence moda will increment itself.
            listLeft=listLeft.slice(indexPause+1);  //If there's a coincidence we chop of the list after the coincidence, in order to look for anothe coincidence in the remaining array
            console.log(listLeft);
        }
    } while (indexPause>=0) //The loop st0ps when there's no more coincidences
    if(moda>comparativeCounter){//Comparing the past coincidences with new coincidences
        comparativeCounter=moda;//If there's more of the new coincidences comparativeCounter actualizes its value 
        type=birdsID[i];//If there's more of the new coincidences type actualizes its value as the type we're currently looking for
    } else if(moda===comparativeCounter){// Comparing if the past coincidences are equal to new coincidences
        if (birdsID[i]-type<0){ //If past and new coincidences are equal, it compares if past type saved is bigger than the actual type
            type=birdsID[i]; //If past type is bigger, type actualizes its value as the current type
        }else{
            type=type;//If curren type is bigger, type stays the same.
        }
    }
}
console.log(`Type: ${type}`);//Console shows the last value saved in type.
