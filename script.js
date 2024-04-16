const btnSubscribe = document.querySelector('.subscribe-button');

btnSubscribe.addEventListener('click', function() {

  console.log('bouton cliqué');

  if(btnSubscribe.innerText === "Abonné"){
    btnSubscribe.innerText = "Abonnez-vous";
  }else{
    console.log("else");
    btnSubscribe.innerText = "Abonné";
  };

});
