var a = 10,
	b = 7,
	value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
	console.log('Wynik jest dodatni.');
} else if (value < 0) {
	console.log('Wynik jest ujemny.');
} else {
	console.log('Wynik jest równy 0');
}