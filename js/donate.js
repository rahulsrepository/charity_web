//-------------------------doante--------------------
let spanFrequency = document.querySelectorAll(".donate .frequency span");
let spanAmount = document.querySelectorAll(".donate .amount .spans span");
console.log(spanFrequency, spanAmount);
active(spanFrequency);
active(spanAmount);

function active(array) {
  array.forEach((element) => {
    element.addEventListener("click", (e) => {
      array.forEach((ele) => {
        ele.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });
}
