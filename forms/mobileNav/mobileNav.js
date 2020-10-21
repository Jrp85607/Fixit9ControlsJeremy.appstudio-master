
hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    console.log(s)
    switch (s) {
      case "Dessert Voting":
        ChangeForm(dessertVoting)
        break
      case "Describing You":
        ChangeForm(describeYou)
        break
      case "Exercise Knowledge":
        ChangeForm(favExercises)
        break
      default:
    }
  /* add a switch here to take the user to the form
     they chose. 
  */
  }
  
}
