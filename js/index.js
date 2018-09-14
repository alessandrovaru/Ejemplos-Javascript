//Creating element
  let elemento = document.createElement("P" )
//Adding Attributes to element
	elemento.setAttribute('name', 'Hola')
	elemento.setAttribute('class', 'none')
//Creating content
	let contenido = document.createTextNode("Hello World!")
//Adding content to element
	elemento.appendChild(contenido)

//Function that adds the element to the DOM in a DIV
	function createHello(){
		document.getElementById("div").appendChild(elemento)
	}

//Function that adds style to the element
document.getElementById('addStyle').onclick = function () {
	if (elemento.getAttribute('class') != 'style') {
		elemento.setAttribute('class', 'style')
	} else {
		elemento.setAttribute('class', 'none')
	}
}
