let firstNum = '';
let secondNum = '';
let oper = '';
let result = '';

$(document).ready(function() { 

	//	-used to catch when the user press any button;

	$('button').click(function(e) {

		let clickedBtn = e.target.innerHTML;

		if (clickedBtn >= '0' && clickedBtn <= '9') {
			handleNumber(clickedBtn);
		}

		else if (clickedBtn === 'Clear') {
				$('#result').empty();
				updateVariables();
			}

		else {
			handleOperator(clickedBtn);
		}  
	});

	//	-if firstNum is empty it assignes the number to it, otherwise it assignes it to secondNum;

	function handleNumber(number) { 

		if (firstNum === '') {      
			firstNum = number;

		} 

		else {       
			secondNum = number;    
		}
		showBtn(number);
	}

	//	-if the operator has a value, then it will calculate the result;

	function handleOperator(operator) {
		
		if (oper === '') { 
	  		oper = operator;
	  		showBtn(operator);    
		} 
		
		else {
		    handleResult();      
		    oper = operator;
		} 
	}

	function showBtn(clickedBtn) {
	
		$('#result').text(clickedBtn);	
	}

	/*	-creates the result based on what operator the user has pressed;
		-prefixing the variables with a + sign converts them from strings to numbers;
	*/
	function handleResult() {

		switch(oper) {
			case '+':
				result = +firstNum + +secondNum;
				showBtn(result);
				break;
			case '-':
				result = +firstNum - +secondNum;
				showBtn(result);
				break;
			case '/':
				result = +firstNum / +secondNum;
				showBtn(result);
				break;
			case 'x':
				result = +firstNum * +secondNum;
				showBtn(result);
				break;
			default:
				break;
		}

		updateVariables();
	}

	function updateVariables() {
		firstNum = '';
		secondNum = '';
		oper = '';
		result = '';
	}

});