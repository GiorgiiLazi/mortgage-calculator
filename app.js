// import  monthlyPayment  from "./modules/formula";

const form = document.querySelector('form');
const monthlyAmount = document.querySelector('#monthly-payments');
const paymentsTotal = document.querySelector('#payments-total');
const results = document.querySelector('.results-container')
const paymentsTitle = document.querySelector('#payments-title');
const type = document.querySelectorAll('.type');

const monthlyPayment = (amount, term, interestRate) =>{
    let monthlyRepayment; //monthly mortgage payment
        let p  = amount; //principle / initial amount borrowed
        let i = interestRate / 100 /12; //monthly interest rate
        let n = term * 12 //number of payments months
        monthlyRepayment =  p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        
   
        return `${monthlyRepayment.toFixed(2)} ￡`;
}

const overpay = (amount, term, interestRate) =>{
    let monthlyRepayment; //monthly mortgage payment
        let p  = amount; //principle / initial amount borrowed
        let i = interestRate / 100 /12; //monthly interest rate
        let n = term * 12 //number of payments months
        monthlyRepayment =  p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        
        const all = monthlyRepayment * n // total amount you will pay to bank
        return `Total you'll repay over term ${(all - amount).toFixed(2)} ￡`
    }
    
    
type.forEach(el =>{
    el.addEventListener('change', (e) =>{
        console.log(form.type.value)
    if(e.target.value === 'interest'){
        paymentsTotal.style.display = 'none'
        paymentsTitle.style.display = 'block'
    } else{
        paymentsTotal.style.display = 'block'
        paymentsTitle.style.display = 'block'

    }
    })

})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    monthlyAmount.textContent = monthlyPayment(form.amount.value, form.term.value, form.rate.value)
    paymentsTotal.textContent = overpay(form.amount.value, form.term.value, form.rate.value)

    if(form.type.value === 'interest'){
        paymentsTotal.style.display = 'none'
    } else{
        paymentsTotal.style.display = 'flex'

    }
    
    

})