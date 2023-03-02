var stockedValue = "";
var symbole = "";
var dotVerif = false;

document.getElementById("clear").onclick = function () {
  document.getElementById("show").innerHTML = "";
  document.getElementById("showStocked").innerHTML = "";
  stockedValue = "";
  symbole = "";
  dotVerif = false;
};

document.getElementById("result").onclick = function () {
  if (
    stockedValue != "" &&
    isNaN(document.getElementById("show").innerHTML) == false &&
    document.getElementById("show").innerHTML != ""
  ) {
    if (symbole == "+") {
      document.getElementById("showStocked").innerHTML =
        Number(stockedValue) +
        Number(document.getElementById("show").innerHTML);
    } else {
      document.getElementById("showStocked").innerHTML =
        Number(stockedValue) -
        Number(document.getElementById("show").innerHTML);
    }
    document.getElementById("show").innerHTML = "";
    stockedValue = "";
    symbole = "";
    dotVerif = false;
  }
};

document.getElementById("plus").onclick = function () {
  if (
    (isNaN(document.getElementById("show").innerHTML) ||
      document.getElementById("show").innerHTML == "") == false &&
    symbole == ""
  ) {
    stockedValue = document.getElementById("show").innerHTML;
    document.getElementById("showStocked").innerHTML = stockedValue + " +";
    document.getElementById("show").innerHTML = "";
    symbole = "+";
    dotVerif = false;
  }
};

document.getElementById("minus").onclick = function () {
  if (
    (isNaN(document.getElementById("show").innerHTML) ||
      document.getElementById("show").innerHTML == "") == false &&
    symbole == ""
  ) {
    stockedValue = document.getElementById("show").innerHTML;
    document.getElementById("showStocked").innerHTML = stockedValue + " -";
    document.getElementById("show").innerHTML = "";
    symbole = "-";
    dotVerif = false;
  }
};

document.getElementById("dot").onclick = function () {
  if (
    (isNaN(document.getElementById("show").innerHTML) ||
      document.getElementById("show").innerHTML == "") == false &&
    dotVerif == false
  ) {
    document.getElementById("show").innerHTML =
      document.getElementById("show").innerHTML + ".";
    dotVerif = true;
  }
};

/* Numbers buttons */
document.getElementById("zero").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "0";
};
document.getElementById("one").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "1";
};
document.getElementById("two").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "2";
};
document.getElementById("three").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "3";
};
document.getElementById("four").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "4";
};
document.getElementById("five").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "5";
};
document.getElementById("six").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "6";
};
document.getElementById("seven").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "7";
};
document.getElementById("eight").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "8";
};
document.getElementById("nine").onclick = function () {
  document.getElementById("show").innerHTML =
    document.getElementById("show").innerHTML + "9";
};
