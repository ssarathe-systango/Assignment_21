
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let tracer = 0;
let summ = 0;
let salaries = {};


function Add_Element(){
	let salaryList = document.getElementById("salaryList");
	// alert(salaryList);

	salaryList.innerHTML = salaryList.innerHTML+`<li>${inp.value}</li>`;
	salaries["v"+tracer.toString()] = parseInt(inp.value);	
	tracer++;

	console.log(salaries);
}


function Sum_All(){
	summ = 0;
	for (let value in salaries) {
        summ = summ + salaries[value]; 
    }

	result.innerText = "Total sum - "+summ;

}