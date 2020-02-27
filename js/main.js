let firstNum = 0;
let secondNum = '';
let oper = '';
let result = '';

$(document).ready(function() { 

	//	-used to catch when the user presses any button;

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

	//	-if the oper is empty it assignes the number to firstNum, otherwise it assignes it to secondNum;

	function handleNumber(number) { 


		if (oper === '') {      
			firstNum = Number(String(firstNum) + String(number));
		} 

		else {       
			secondNum = Number(String(secondNum) + String(number));    
		}
		showResult(number);
	}

	//	-if the operator has a value, then it will calculate the result;

	function handleOperator(operator) {
 
			if (oper === '') { 
	  			oper = operator;
	  			showResult(operator);    
			} 
		
			else {
		    	handleResult();      
		    	oper = operator;
			}
	}

	function showResult(clickedBtn) {
	
		$('#result').text(firstNum + oper + secondNum + (result ? '=' +result : ''));	
	}

	/*	-creates the result based on what operator the user has pressed;
		-prefixing the variables with a + sign converts them from strings to numbers;
	*/
	function handleResult() {

		switch(oper) {
			case '+':
				result = +firstNum + +secondNum;
				showResult(result);
		
				break;
			case '-':
				result = +firstNum - +secondNum;
				showResult(result);
		
				break;
			case '/':
				result = +firstNum / +secondNum;
				showResult(result);
		
				break;
			case 'x':
				result = +firstNum * +secondNum;
				showResult(result);
		
				break;
			default:
				break;
		}

		updateVariables();
	}

	function updateVariables() {
		firstNum = 0;
		secondNum = '';
		oper = '';
		result = '';
	}

});