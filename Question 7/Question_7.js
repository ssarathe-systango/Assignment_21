function check(year){
	// let year = parseInt(inp.value)
	( year % 400 === 0 )?alert("Yes, its a leap year"):
	( year % 100 === 0 )?alert("No, its not a leap year"):
	( year % 4 === 0 )?alert("Yes, its a leap year"):alert("No, its not a leap year");
}
const year = prompt("Enter Year:")
check(year)