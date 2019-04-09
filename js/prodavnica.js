/*izvrsiti funkciju ukupanIznos u formi sa proizvodima*/
document.getElementById("proizvodi").addEventListener("submit", ukupanIznos);
/*funkcija za proracun cene*/
function ukupanIznos(event) {
  event.preventDefault();
  /*obavezan odabir grada*/
  if (document.getElementById("s-grad").value === '') {
    alert("  --  МОЛИМ ВАС ДА УНЕСЕТЕ ВАШ ГРАД  --  ");
  }
  /*uzmi izabrane vrednosti iz proizvoda i grada*/
  var kolPrvi = parseInt(document.getElementById("jedan").value, 10) || 0,
    kolDrugi = parseInt(document.getElementById("dva").value, 10) || 0,
    kolTreci = parseInt(document.getElementById("tri").value, 10) || 0,
    kolCetvrti = parseInt(document.getElementById("cetiri").value, 10) || 0,
    kolPeti = parseInt(document.getElementById("pet").value, 10) || 0,
    kolSesti = parseInt(document.getElementById("sest").value, 10) || 0,
    kolSedmi = parseInt(document.getElementById("sedam").value, 10) || 0,
    kolOsmi = parseInt(document.getElementById("osam").value, 10) || 0,
    grad = document.getElementById("s-grad").value;

  var methods = document.getElementById("proizvodi").r_method,
    isporukaMetod;

  for (var i = 0; i < methods.length; i++) {
    if (methods[i].checked == true) {
      isporukaMetod = methods[i].value;
    }
  }
  /*posebna vrednost za PDV*/
  var pdvIznos = 1;
  if (grad === "DR") {
    pdvIznos = 1.20;
  }
  /*vrednosti nacina isporuke*/
  var cenaIsporukePo = 0;
  switch (isporukaMetod) {
    case "preuzimanje":
      cenaIsporukePo = 0;
      break;
    case "kompanijski":
      cenaIsporukePo = 2;
      break;
    case "postexpres":
      cenaIsporukePo = 3;
      break;
  }
  /*proracun cene*/
  var ukupnoProizvoda = kolPrvi + kolDrugi + kolTreci + kolCetvrti + kolPeti + kolSesti + kolSedmi + kolOsmi,
    isporukaCena = ukupnoProizvoda * cenaIsporukePo;
  var bezIsporuke = ((kolPrvi * 7) + (kolDrugi * 8) + (kolTreci * 9) + (kolCetvrti * 10) + (kolPeti * 11) + (kolSesti * 12) + (kolSedmi * 13) + (kolOsmi * 14)) * pdvIznos;
  var izracunaj = "евра: " + (bezIsporuke + isporukaCena).toFixed(2);
  /*ispis cene*/
  document.getElementById("txt-izracunaj").value = izracunaj;
  document.getElementById("rezultati").innerHTML = "Укупно производа: " + ukupnoProizvoda + '<br>';
  document.getElementById("rezultati").innerHTML += "Цена испоруке: " + isporukaCena.toFixed(2) + '<br>';
  document.getElementById("rezultati").innerHTML += "ПДВ: " + ((pdvIznos - 1) * 100).toFixed(2) + '%';
}
