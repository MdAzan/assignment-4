// target all elements that needed
let firstClassInput = document.getElementById('firstClassInput');
let economyClassInput = document.getElementById('economyClassInput');
const bookingForm = document.querySelector('.booking-form');
const subtotal = document.getElementById('subtotal');
const vat = document.getElementById('vat');
const total = document.getElementById('total');
const model = document.getElementById('model');
const submit = document.querySelector('.submit');






function newRes(){
    bookingForm.addEventListener("click", (e) => {             
        const match = e.target.classList;
        let recentFirstClassTic = parseInt(firstClassInput.value);
        let recentEconomyClassTic = parseInt(economyClassInput.value);
        // firstClass ticket
        if(match.contains('plus1')){
            let newValue = recentFirstClassTic + 1;
            firstClassInput.value = newValue;
        }
        else if(match.contains('minus1')){
            let newValue = recentFirstClassTic - 1;
            firstClassInput.value = newValue;
            if(firstClassInput.value < 0){
                firstClassInput.value = 0;
            }   
        }
        // economy class ticket
        if(match.contains('plus2')){
            let newSecValue = recentEconomyClassTic + 1;
            economyClassInput.value = newSecValue;
        }
        else if(match.contains('minus2')){
            let newSecValue = recentEconomyClassTic - 1;
            economyClassInput.value = newSecValue;
            if(economyClassInput.value < 0){
              economyClassInput.value = 0;
            }
        }

       
        if(parseInt(firstClassInput.value) == 0 && parseInt(economyClassInput.value) == 0){
            subtotal.innerText = "00";
            total.innerText ="00";
            vat.innerText = "00";
        }else{
            let firstInput = parseInt(firstClassInput.value);
            let secondInput = parseInt(economyClassInput.value);
            let totalCost = (150 * firstInput) + (100 * secondInput)
            subtotal.innerText = totalCost;
            let VAT = totalCost * (10 / 100);
            vat.innerText = VAT;
            total.innerText = totalCost + VAT;
             // show model
             submit.addEventListener('click', (e) => {
                if(model.classList.contains('d-none')){
                    model.classList.remove('d-none');
                }
                firstInput = parseInt(firstClassInput.value);
                secondInput = parseInt(economyClassInput.value);
                totalCost = (150 * firstInput) + (100 * secondInput)
                if(firstInput == 0 && secondInput == 0){
                    VAT = 0;
                }
                document.querySelector('.output1 .calculate').innerText = "150 * " + firstInput;
                document.querySelector('.output2 .calculate').innerText = "100 * " + secondInput;
                document.querySelector('.output1 .total').innerText = firstInput * 150;
                document.querySelector('.output2 .total').innerText = 100 * secondInput;
                document.querySelector('.totalTicket').innerText = (150 * firstInput) + (100 * secondInput);
                document.querySelector('.vatInModel').innerText = VAT;
                document.querySelector('.totalCalculation').innerText = totalCost + VAT;
            })
        }  
    })
}

newRes()
