function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }

  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function exerciseRoutine(postRunActivity){
    runFiveMiles()
    postRunActivity()
  }

  function Monday(){
    exerciseRoutine(liftWeights)
  }








  function morningRoutine(exe){
    let breakfast;

  if (exe === liftWeights){
     breakfast = "protein bar";
  }

  else if(exe===swimFortyLaps){
    breakfast = "smoothie";
  }

  else{
    breakfast="ugali";
  }

  exerciseRoutine(exe)

  return function(){
    console.log(`Nom Nom Nom, this ${breakfast} is delicious`);
  }
  }

  const afterExercise1 = morningRoutine(liftWeights);
  const afterExercise2 = morningRoutine(swimFortyLaps)

  afterExercise1()
  afterExercise2()


function learningSD(){
    console.log("Introduction 101")
}

function learnLanguage1(){
    console.log("Learn HTML");
}

function learnLanguage2(){
    console.log("Learn CSS");
}

  function receivesAFunction(learnAProgrammingLanguage){
    learningSD()
    learnAProgrammingLanguage()
  }

  function returnsANamedFunction(){
    receivesAFunction(learnLanguage1);
    receivesAFunction(learnLanguage2);
  }

  
  const returnsAnAnonymousFunction = (()=>console.log("Learn Javascript"));


returnsAnAnonymousFunction()