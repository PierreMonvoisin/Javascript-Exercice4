document.getElementById("submit").onclick = function() {message()};

function message() {
  let nom = document.getElementById("lastname");
  let prénom = document.getElementById("firstname");
  let ville = document.getElementById("city");

  alert('Nom : '+ lastName +'\nPrénom : '+ firstName +'\nVille : '+ city);
}
