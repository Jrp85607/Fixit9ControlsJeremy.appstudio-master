var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  for (i=0;i<exercises.length;i++){
  selExercises.addItem(exercises[i])
  }
/*  for (i=0;i<coreExercises.length;i++){
  selExercises.addItem(coreExercises[i])
  }*/
}

selExercises.onfocusout=function(){
  
}


btnMobile.onclick=function(){
  ChangeForm(mobileNav)
}

let arrayTest = []

btnSubmit.onclick=function(selected){
 if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    lblExercises.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
  } else {
    lblExercises.value = "You did not pick the two core exercises"
  }
}




/*
  console.log(selected)
  arrayTest.push(selected[1])
  console.log(arrayTest)
  let message = ""
  let check1 = coreExercises.includes(arrayTest[0])
  let check2 = coreExercises.includes(arrayTest[1])
  console.log(check1)
  console.log(check2)
  if (check1 == true && check2 == true) {
    message = "You chose the two core exercises:" 
    for (i = 0; i <= selExercises.text.length - 1; i++)
    message = message + " "+ selExercises.text[i]
    lblExercises.value = message  
  } else {
    message = "You did not pick the two core exersies, you chose:" 
    for (i = 0; i <= selExercises.text.length - 1; i++)
    message = message + " "+ selExercises.text[i]
    lblExercises.value = message 
  }
*/