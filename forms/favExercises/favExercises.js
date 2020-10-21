var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  for (i=0;i<exercises.length;i++){
  selExercises.addItem(exercises[i])
  }
  for (i=0;i<coreExercises.length;i++){
  selExercises.addItem(coreExercises[i])
  }
}

selExercises.onfocusout=function(){
  let message = "You chose:" 
  if (selExercises.text.length == 2) {
    for (i = 0; i <= selExercises.text.length - 1; i++)
    message = message + " "+ selExercises.text[i]
    lblExercises.value = message  
    
  } else {
    lblExercises.value = `You did not pick the two core exercises.`
  }
}


btnMobile.onclick=function(){
  ChangeForm(mobileNav)
}
