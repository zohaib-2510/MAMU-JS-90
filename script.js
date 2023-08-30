var inp1 = prompt('ENETR YOUR NAME')
alert('ASALAM-O-ALAIKUM'+' '+ inp1);
var name1 = prompt('ENETR YOUR FIRST SUBJECT NAME :')
var name2 = prompt('ENETR YOUR SECOND SUBJECT NAME :')
var name3 = prompt('ENETR YOUR THIRD SUBJECT NAME :')

var mark1 = +prompt('ENETR YOUR'+' '+ name1 +' '+ 'MARKS')
var mark2 = +prompt('ENETR YOUR'+' '+ name2 +' '+ 'MARKS')
var mark3 = +prompt('ENETR YOUR'+' '+ name3 +' '+ 'MARKS')


var totsl =  mark1 + mark2 + mark3
var perc = (totsl / 300) * 100 

 document.write('YOUR TOTAL MARKS OF ALL SUBJECT IS'+' '+ totsl+' '+'AND YOUR PERCENTAGE IS'
 +' '+perc+"%"+ ' '+ 'OUT OF 100')
