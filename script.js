const API_URL = "https://script.google.com/macros/s/AKfycbwLBaLOjd7KacMlad8Xah8P2wxdNvvMSngxI69Ywxs4KXyKSGIirZTbEekEPwFDY7Oz/exec";

let total = 0;

function addMember() {
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    batch: document.getElementById("batch").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    total++;
    document.getElementById("total").innerText = total;
    alert("Member Added!");
  });
}
