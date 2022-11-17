order = ""
for (let i = 0; i < 10; i++) {
  order += String(Math.floor(Math.random() * 10));
}

let orderNum = document.querySelector("#order_num");

orderNum.innerHTML = "Your order number is #" + order;