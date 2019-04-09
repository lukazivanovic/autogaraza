/*izvrsi funkciju proveri u kontakt formi*/
document.getElementById("forma").addEventListener("submit", proveri);
/*funkcija za proveru teksta*/
function proveri(event) {
  event.preventDefault();
  /*regularni izrazi za polja*/
  var testIme = /^[a-zA-Z '-]{2,50}$/;
  var testEmail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}$/;
  var testAddress = /^(http(s)?:\/\/)?www\.(\w{2,}[\.-]?\w+)\.[a-z]{2,6}$/;
  var testTelephone1 = /^0\d{2}\/\d{3}\-\d{3,4}$/;
  var testPoruka = /^^(?!\s*$).+$/;
  /*preuzmi vrednosti polja*/
  var tekstIme = document.forma.firstname.value;
  var tekstEmail = document.forma.email.value;
  var tekstAdresa = document.forma.address.value;
  var tekstTelefon1 = document.forma.telephone1.value;
  var tekstPoruka = document.forma.inputTekst.value;
  /*provera tacnosti regularnih izraza*/
  var rezultat = tekstIme.match(testIme);
  if (rezultat != null)
    document.getElementById("rezIme").innerHTML = ("");
  else
    document.getElementById("rezIme").innerHTML = ("није у реду!");

  var rezultat = tekstEmail.match(testEmail);
  if (rezultat != null)
    document.getElementById("rezEmail").innerHTML = ("");
  else
    document.getElementById("rezEmail").innerHTML = ("није у реду!");

  var rezultat = tekstAdresa.match(testAddress);
  if (rezultat != null)
    document.getElementById("rezAdresa").innerHTML = ("");
  else
    document.getElementById("rezAdresa").innerHTML = ("није у реду!");

  var rezultat = tekstTelefon1.match(testTelephone1);
  if (rezultat != null)
    document.getElementById("rezTelefon1").innerHTML = ("");
  else
    document.getElementById("rezTelefon1").innerHTML = ("није у реду!");

  var rezultat = tekstPoruka.match(testPoruka);
  if (rezultat != null)
    document.getElementById("rezPoruka").innerHTML = ("");
  else
    document.getElementById("rezPoruka").innerHTML = ("није у реду!");
}
