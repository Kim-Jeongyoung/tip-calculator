// Grab elements
const bill = document.getElementById("bill_value");
const tip = document.getElementById("tip_value");
const numOfPeople = document.getElementById("numberOfPeople_value");

const totalBill = document.getElementById("totalBill");
const totalPerPerson = document.getElementById("totalPerPerson");
const tipPerPerson = document.getElementById("tipPerPerson");

// initial run
calculate();

bill.addEventListener("input", calculate);
tip.addEventListener("input", calculate);
numOfPeople.addEventListener("input", calculate);

function calculate() {
  const billValue = +bill.value;
  const tipValue = +tip.value;
  const numberOfPeople = +numOfPeople < 0 ? 1 : +numOfPeople.value;

  const calcTotalTip = (billValue * tipValue) / 100;
  const calcTotalBill = billValue + calcTotalTip;
  const calcPerPerson = calcTotalBill / numberOfPeople;
  const calcTipPerPerson = calcTotalTip / numberOfPeople;

  totalBill.innerHTML = calcTotalBill.toFixed(2);
  totalPerPerson.innerHTML = calcPerPerson.toFixed(2);
  tipPerPerson.innerHTML = calcTipPerPerson.toFixed(2);
}
