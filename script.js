let english = document.getElementById("english");
let maths = document.getElementById("maths");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let computer = document.getElementById("computer");
let totaldiv = document.getElementById("total");
let averagediv = document.getElementById("average");
let gradediv = document.getElementById("grade");
let engVal = 0;
let mathVal = 0;
let phyVal = 0;
let cheVal = 0;
let comVal = 0;
function calculate() {
  if (maths.value != "") mathVal = parseInt(maths.value);
  if (english.value != "") engVal = parseInt(english.value);
  if (physics.value != "") phyVal = parseInt(physics.value);
  if (chemistry.value != "") cheVal = parseInt(chemistry.value);
  if (computer.value != "") comVal = parseInt(computer.value);
  if (
    engVal > 100 ||
    mathVal > 100 ||
    phyVal > 100 ||
    cheVal > 100 ||
    comVal > 100 ||
    engVal < 0 ||
    mathVal < 0 ||
    phyVal < 0 ||
    cheVal < 0 ||
    comVal < 0
  ) {
    alert("Please Enter the range 0 to 100");
  } else {
    let total = engVal + mathVal + phyVal + cheVal + comVal;

    let average = total / 5;
    let overallGrade = (total / 500) * 100;
    let grade;
    if (
      engVal < 35 ||
      mathVal < 35 ||
      phyVal < 35 ||
      cheVal < 35 ||
      comVal < 35
    ) {
      grade = "F";
    } else {
      if (overallGrade >= 90) grade = "A";
      else if (overallGrade >= 80) grade = "B";
      else if (overallGrade >= 70) grade = "C";
      else if (overallGrade >= 60) grade = "D";
      else grade = "F";
    }
    totaldiv.innerHTML = `you got ${total}`;
    averagediv.innerHTML = `you got ${average}`;
    gradediv.innerHTML = `you got ${grade}`;
  }
}
