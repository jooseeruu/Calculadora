/* Esta función toma el valor del botón presionado y lo agrega al campo de texto */
function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

/* Esta función limpia el campo de texto */
function clearInput(y) {
	document.getElementById('inputwindow').value = y;
}

/* Esta función evalúa la expresión en el campo de texto y muestra el resultado */
function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}
