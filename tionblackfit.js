function myFunction() {
    var x =
    document.getElementById("myLinks_bf");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  
  function mostrarDialog(){
    var meuDialog = document.getElementById('modal');
    meuDialog.style.visibility = 'visible';
    meuDialog.showModal();
  
    var fecharDialog = document.getElementById('btn_close_modal');
    fecharDialog.addEventListener('click', function(){
      meuDialog.style.visibility = 'hidden';
      meuDialog.close();
    })
  }

const buyPopup = document.getElementById('modal');
const planOptions = document.getElementById('planOptions');
const buyButton = document.getElementById('button_buy_modal');

function redirectToPaymentPage(plan) {

  switch (plan) {
    case 'consultoria_cuba': 
    window.location.href = 'paynow.html';
    break;
    case 'nutricionista':
      window.location.href = 'formularioblackfit.html'
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