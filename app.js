// import  monthlyPayment  from "./modules/formula";

const form = document.querySelector('form');
const monthlyAmount = document.querySelector('#monthly-payments');
const paymentsTotal = document.querySelector('#payments-total');


const monthlyPayment = (amount, term, interestRate) =>{
    let monthlyRepayment; //monthly mortgage payment
        let p  = amount; //principle / initial amount borrowed
        let i = interestRate / 100 /12; //monthly interest rate
        let n = term * 12 //number of payments months
        monthlyRepayment =  p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        
    if(form.type.value === 'interest'){
        return `${monthlyRepayment.toFixed(2)} $`;
    } else if(form.type.value === 'repayment'){
        const all = monthlyRepayment * n // total amount you will pay to bank
        return `${all.toFixed(2)} $`
    }
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    monthlyAmount.textContent = monthlyPayment(form.amount.value, form.term.value, form.rate.value)
    form.reset();
})