var a = prompt ('What is your first number', '0');
var b = prompt ('What is your second number','0');
var num1 = parseInt(a);
var num2 = parseInt(b);
var num3 = (num1 + num2);
var c = parseInt(num3);

switch (c) {
  case 4:
    alert( 'Too small' );
     break;
  case c == 4:
    alert( 'Exactly!' );
    break;
  case c > 4:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}