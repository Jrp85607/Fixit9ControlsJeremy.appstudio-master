var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
  drpDesserts.clear()
  for (y = 0; y <= dessertList.length - 1; y++) {
    drpDesserts.addItem(dessertList[y])
    }
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
}


drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
      drpDesserts.value = s
    lblPrompt.value = `You picked ${s}, that is a great choice!`
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }
}

btn.onclick=function(){
  ChangeForm(describeYou)
}
