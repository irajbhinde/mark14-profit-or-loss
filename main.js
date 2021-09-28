function calculateProfitOrloss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current)*quantity
        loss = loss.toFixed(2)
        var lossPercentage = (loss / initial) * 100
        lossPercentage = lossPercentage.toFixed(2)
        outputDiv.style.color = 'red'
        showMessage(`Oops! You had a loss of ${loss} rupees & ${lossPercentage}%`)
    }
    else if (initial < current){
        var profit = (current - initial)*quantity
        profit = profit.toFixed(2)
        var profitPercentage = (profit / initial)*100
        profitPercentage = profitPercentage.toFixed(2)
        outputDiv.style.color = 'green'
        showMessage(`Nice! You had a profit of ${profit} rupees & ${profitPercentage}%`);
    }
    else {
        showMessage("No Gain & Only Pain")
    }
}

function clickHandler(){
    var ip = Number(initialPrice.value)
    var qty = Number(quantityOfStock.value)
    var curr = Number(currentPrice.value)

    calculateProfitOrloss(ip,qty,curr)
}

function showMessage(message){
    outputDiv.innerHTML = message
}

const initialPrice = document.querySelector("#initial-price")
const quantityOfStock = document.querySelector("#quantity-of-stock")
const currentPrice = document.querySelector("#current-price")
const checkBtn = document.querySelector(".check-btn")
const outputDiv = document.querySelector(".output-div")

checkBtn.addEventListener('click',clickHandler)