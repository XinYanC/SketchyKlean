let taxX = document.querySelector("#tax");
let totalL = document.querySelector("#total");

let tot = 100;
let taxtot = 0;
let totot = 0;
gift = 0

let giftSelect = document.querySelector("#giftselect");

giftSelect.addEventListener('change', function() {
  let giftselect1 = document.querySelector("#giftselect1");
  if (this.checked) {
    giftselect1.innerHTML = "<p>Gift selected: $" + (giftselect.value) + "<p>"
    gift += Number(giftselect.value); 
    gift_tot = Number(qtyselect.value) + Number(giftselect.value);
    console.log("no tax " + gift_tot);
    gift_taxtot = Number(gift_tot) * 0.08875;
    gift_roundtaxtot = Math.round(100* Number(gift_taxtot))/100;
    console.log("gift tax " + gift_taxtot);
    gift_totot = Number(gift_taxtot) + Number(gift_tot);
    console.log("all total " + gift_totot);
    gift_roundtotot = Math.round(100* Number(gift_totot))/100;
    taxX.innerHTML = "<p>Tax (8.875%): $" + Number(gift_roundtaxtot) + "<p>";
    totalL.innerHTML = "<p>$" + Number(gift_roundtotot) + "</p>";
  } else {
    giftselect1.innerHTML = "" 
    gift -= Number(giftselect.value);
    console.log("tot " + tot)
    gift_tot -= Number(giftselect.value);
    console.log("no tax " + gift_tot);
    gift_taxtot = Number(gift_tot) * 0.08875;
    gift_roundtaxtot = Math.round(100* Number(gift_taxtot))/100;
    console.log("gift tax " + gift_taxtot);
    gift_totot = Number(gift_taxtot) + Number(gift_tot);
    console.log("all total " + gift_totot);
    gift_roundtotot = Math.round(100* Number(gift_totot))/100;
    taxX.innerHTML = "<p>Tax (8.875%): $" + Number(gift_roundtaxtot) + "<p>";
    totalL.innerHTML = "<p>$" + Number(gift_roundtotot) + "</p>";
  }
});

let qtySelect = document.querySelector("#qtyselect");

qtySelect.addEventListener("change", () => {
  console.log("New Selection!");
  let qtySelect1 = document.querySelector("#qtyselect1");
  qtySelect1.innerHTML = "<p>Quantity Total Price: $" + qtyselect.value + "<p>";
  tot = Number(qtyselect.value) + gift;
  console.log(tot);
  taxtot += Number(tot) * 0.08875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax (8.875%): $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

let insuranceSelect = document.querySelector("#insuranceselect");

insuranceSelect.addEventListener("change", () => {
  console.log("New Selection!");
  let insuranceSelect1 = document.querySelector("#insuranceselect1");
  insuranceSelect1.innerHTML = "<p>Insurance selected: $" + insuranceselect.value + "<p>";
  tot += Number(insuranceselect.value);
  console.log(tot);
  taxtot += Number(tot) * 0.08875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax (8.875%): $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

let delieverySelect = document.querySelector("#delieveryselect");

delieverySelect.addEventListener("change", () => {
  console.log("New Selection!");
  let delieverySelect1 = document.querySelector("#delieveryselect1");
  delieverySelect1.innerHTML = "<p>Delivery selected: $" + delieveryselect.value + "<p>";
  tot += Number(delieveryselect.value);
  console.log(tot);
  taxtot += Number(tot) * 0.08875;
  console.log(taxtot);
  roundtax = Math.round(100* Number(taxtot))/100;
  console.log(roundtax);
  totot = Number(taxtot) + Number(tot);
  console.log(totot);
  roundtotot = Math.round(100* Number(totot))/100;
  taxX.innerHTML = "<p>Tax (8.875%): $" + Number(roundtax) + "<p>";
  totalL.innerHTML = "<p>$" + Number(roundtotot) + "</p>";
})

