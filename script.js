var inp1 = prompt('ENETR YOUR NAME')
alert('ASALAM-O-ALAIKUM'+' '+ inp1);
var name1 = prompt('ENETR YOUR FIRST SUBJECT NAME :')
var name2 = prompt('ENETR YOUR SECOND SUBJECT NAME :')
var name3 = prompt('ENETR YOUR THIRD SUBJECT NAME :')

var mark1 = +prompt('ENETR YOUR'+' '+ name1 +' '+ 'MARKS')
var mark2 = +prompt('ENETR YOUR'+' '+ name2 +' '+ 'MARKS')
var mark3 = +prompt('ENETR YOUR'+' '+ name3 +' '+ 'MARKS')
var totsl =  mark1 + mark2 + mark3
var total = +prompt('3 SUBJECT KE TOTAL MARK DALO DEKO AGR 1 SUB KE 100 HAIN TO 3 KE 300 DALOOO')
var perc = (totsl / 300) * 100 
 document.write('YOUR TOTAL MARKS OF ALL SUBJECT IS'+' '+ totsl+' '+'OUT OF'+' '+total+' '+'AND YOUR PERCENTAGE IS'
 +' '+perc.toFixed(2)+"%"+ ' '+ 'OUT OF 100%')
