document.addEventListener("DOMContentLoaded", function(event) {
    var node =  document.getElementById(div-uno);
    var ul = document.createElement('ul');
    var liUno = document.createElement('li');
    var liUnoText = document.createTextNode("Uno");
    liUno.append(liUnoText);
    var liDos = document.createElement('li');
    var liDosText = document.createTextNode("Dos");
    liDos.append(liDosText);
    var liTres = document.createElement('li');
    var liTresText = document.createTextNode("Tres");
    liTres.append(liTresText);
    ul.append(liUno);
    ul.append(liDos);
    ul.append(liTres);
    node.append(ul);
});


