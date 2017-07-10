/*
*
*
*
*/

var Carro =
{
	marca: "Nissan",
	modelo: "350z",
	comprimento: "3.345mm",
	velocidade: "320km/h",
	cavalos: "350"
}

for (var props in Carro)
{
	alert(props + " = " + Carro[props]);
}