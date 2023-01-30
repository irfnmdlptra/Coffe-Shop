const scriptURL = "https://script.google.com/macros/s/AKfycbynJK-3ZgIY82-DsiMoGvtUrCoL6Q3wBn14NOCChQQSRzsrq_nI4CyTojV5-NhV8_b2/exec";
const form = document.forms["cofshop-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

//   btnKirim.addEventListener('click', function(){
//     alert('cobabab')
//   })

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Menghilakan Tombol Kirim
  btnLoading.classList.toggle("none");
  btnKirim.classList.toggle("none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      myAlert.classList.toggle("none");
      btnLoading.classList.toggle("none");
      btnKirim.classList.toggle("none");
      window.addEventListener('click', function(){
          myAlert.classList.add("none");
      })
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
