/**
	Função Ligar()
	Autor: Matheus Flauzino
	Descrição: apresenta o nome do usuário e liga a lampada.
**/

function ligar()
{
	var nome = window.prompt("Qual o seu nome");

	alert('Prazer em conhecer você ' + nome);
	document.getElementById('lampada').src = "img/lamp_on.jpg"
}