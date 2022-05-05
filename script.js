let displayTip = document.querySelector('#tipAmount')
let bill = document.querySelector('#bill')
let service = document.querySelector('#service')
let people = document.querySelector('#people')
let displaySection = document.querySelector('.displayTip')
const calculate = document.querySelector('button')

const calculateTip = () => {
    // basic math section
    if(!bill.value || !service.value || !people.value) {
        alert('Fill in all the blanks, please!')
    } else {
        let tip = (Number(bill.value) * Number(service.value)) / Number(people.value)
        displaySection.style.display = 'block'
        displayTip.innerHTML = Math.ceil(tip)   
    }
}

calculate.addEventListener('click', calculateTip)