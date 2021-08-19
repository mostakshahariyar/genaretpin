function getPin() {
	const pin = Math.round(Math.random() * 10000);
	const pinString = pin + '';
	if (pinString.length == 4) {
		return pin;
	}
	else {
		// console.log('got 3 digit and again', pin);
		return getPin;
	}
}

function genaratePin() {

	const pin = getPin();
	document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
	const number = event.target.innerText;
	const calcInput = document.getElementById('type-number');
	if (isNaN(number)) {
		if (number == 'C') {
			calcInput.value = '';
		}
	}
	else {

		const previousNumber = calcInput.value;
		const newNumber = previousNumber + number;
		calcInput.value = newNumber;
	}
})

// submit btn 

function verifyPin() {
	const pin = document.getElementById('display-pin').value;
	const typeNumbers = document.getElementById('type-number').value;
	const notifySuccessSms = document.getElementById('notify-success');
	const notifyFailSms = document.getElementById('notify-fail');
	if (pin == typeNumbers) {
		notifyFailSms.style.display = 'none'
		notifySuccessSms.style.display = 'block'
	}
	else {
		notifySuccessSms.style.display = 'none'
		notifyFailSms.style.display = 'block'
	}
}