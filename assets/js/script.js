document.getElementById("submit").onclick = function() {message()};

function message() {
  let nom = document.getElementById("lastname").value;
  let prénom = document.getElementById("firstname").value;
  let ville = document.getElementById("city").value;

  alert('Nom : '+ nom +'\nPrénom : '+ prénom +'\nVille : '+ ville);
}
