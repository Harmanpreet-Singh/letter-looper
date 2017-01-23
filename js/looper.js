
var letter;

while(!letter)
{
	letter = prompt("Enter a character");
}

for (var i = 0; i < 10; i += 1)
{
	for (var k = 0; k <= i; k += 1)
	{
		document.write(letter);
		//document.write("i:"+i+"k:"+k);
	}
	document.write('<br>');
}