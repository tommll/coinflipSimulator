var button = document.querySelector('.orange-button');
var input = document.querySelector('.console-input-input');


button.addEventListener('click', () => {
	var result_tail = document.querySelector('.console-output-tail--value');
	var result_head = document.querySelector('.console-output-head--value');
	const times = input.value;
	
	//Algorithm
	let tails = 0;
	let heads = 0
	for (let i=1; i<= times; i++) {
		if (Math.random() >=0.5)
			tails += 1;
		else
			heads += 1;			
	}
	result_tail.textContent = tails;
	result_head.textContent = heads;
})
