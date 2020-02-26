var lists = [5, 1 ,6 ,-3 , 0 , 15, -7 , -9, 20] // numbers in the list
          // 0  1  2   3   4   5    6   7   8
          // i = 0 + 1 + 1
console.log('the old list => ' + lists)
for(i=0;i<lists.length;i++) {
   for(j=i; j<lists.length;j++) {
       if(lists[i] > lists[j]) {
        // if true fo somthins
        // replacement of the number that are small than the other
        x = lists[i]
        // x is going to take the first value
        lists[i] = lists[j]
        // the posistion lists[i] is going to be earased by the followed one
        lists[j] = x
        // stored the previous value for ex : the 5
       }
   }
}
// arrange the numbers from the smallest one the biggest one for exemple : 
// 1 , 2 , 3 , 4 ,5 ....
console.log('the new list => ' + lists)