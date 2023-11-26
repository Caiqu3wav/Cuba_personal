function myFunction() {
  var x =
  document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
  
const buttonBuy = document.getElementById("button_buy")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("btn_close_modal")

buttonBuy.onclick = function () {
  modal.show()
}

buttonClose.onclick = function () {
  modal.close()
}

const buyPopup = document.getElementById('modal');
const planOptions = document.getElementById('planOptions');
const buyButton = document.getElementById('button_buy_modal');

function redirectToPaymentPage(plan) {

  switch (plan) {
    case 'consultoria_cuba': 
    window.location.href = 'formulario300.html';
    break;
  case 'blackfit': 
  window.location.href = 'formularioblackfit.html';
      break;
  }
}


  function showPaymentForm(){
    const selectedPlan = planOptions.value;

    if (selectedPlan) {
      redirectToPaymentPage(selectedPlan);
    } else {
      console.error('Nenhum plano selecionado.');
    }
  }