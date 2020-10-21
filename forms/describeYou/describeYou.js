/*
Second Program
1. radio button(s) under the label.
2. Radio button choices stacked: Optimistic, Pessimistic, Trusting, Envious.
3. event handler code  that shows message in label control using format: 
    "I would agree that you are a 'trusting' person too!"
4. button on the right bottom corner that goes to favExercises form. 
*/



btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}

rbtFeelings.onclick=function(){
  lblFeelings.value = `I would agree that you are a ${$("input[name=rbtFeelings]:checked").prop("value")} person too!` 
}
