
let y = document.querySelector(".input1")
y.addEventListener("change", async () => {

    let z = document.querySelector(".select")
    let z1 = z.value
    console.log(z1)
    if (z1 == 1) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/INR");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value =parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee1 = fee.innerHTML = "123 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee1
    }
    if (z1 == 2) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/RUB");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee2 = fee.innerHTML = "143 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee2
    }
    if (z1 == 3) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/EUR");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee3 = fee.innerHTML = "321 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee3
    }
    if (z1 == 4) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/JPY");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee4 = fee.innerHTML = "200 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee4
    }



})





let y1 = document.querySelector(".input2")
y1.addEventListener("change", async () => {
    let z = document.querySelector(".select")
    let z1 = z.value
    if (z1 == 1) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/USD")
        const rates1 = await response.text()
        // console.log(rates1)
        let div2 = document.createElement("div")
        div2.innerHTML = rates1
        let x = JSON.parse(rates1)["conversion_rates"]
        // console.log(x)
        let x1 = x["INR"]
        // console.log(x1)
        let input1 = document.querySelector(".input2").value
        let input2 = document.querySelector(".input1").value = parseFloat(input1 * x1).toFixed(2)
    }
    if (z1 == 2) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/USD")
        const rates1 = await response.text()
        // console.log(rates1)
        let div2 = document.createElement("div")
        div2.innerHTML = rates1
        let x = JSON.parse(rates1)["conversion_rates"]
        // console.log(x)
        let x1 = x["RUB"]
        // console.log(x1)
        let input1 = document.querySelector(".input2").value
        let input2 = document.querySelector(".input1").value =parseFloat(input1 * x1).toFixed(2)
    }
    if (z1 == 3) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/USD")
        const rates1 = await response.text()
        // console.log(rates1)
        let div2 = document.createElement("div")
        div2.innerHTML = rates1
        let x = JSON.parse(rates1)["conversion_rates"]
        // console.log(x)
        let x1 = x["EUR"]
        // console.log(x1)
        let input1 = document.querySelector(".input2").value
        let input2 = document.querySelector(".input1").value = parseFloat(input1 * x1).toFixed(2)
    }
    if (z1 == 4) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/USD")
        const rates1 = await response.text()
        // console.log(rates1)
        let div2 = document.createElement("div")
        div2.innerHTML = rates1
        let x = JSON.parse(rates1)["conversion_rates"]
        // console.log(x)
        let x1 = x["JPY"]
        // console.log(x1)
        let input1 = document.querySelector(".input2").value
        let input2 = document.querySelector(".input1").value = parseFloat(input1 * x1).toFixed(2)
    }
    

})
let btnvalue = document.querySelector(".select")
btnvalue.addEventListener("change" , async()=>{
    let z = document.querySelector(".select")
    let z1 = z.value
    console.log(z1)
    if (z1 == 1) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/INR");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value =parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee1 = fee.innerHTML = "123 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee1
    }
    if (z1 == 2) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/RUB");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee2 = fee.innerHTML = "143 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee2
    }
    if (z1 == 3) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/EUR");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee3 = fee.innerHTML = "321 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee3
    }
    if (z1 == 4) {
        const response = await fetch(" https://v6.exchangerate-api.com/v6/7174259a268c0d0cefec006a/latest/JPY");
        const rates = await response.text();
        // console.log(rates)
        let div = document.createElement("div")
        div.innerHTML = rates
        let x = JSON.parse(rates)["conversion_rates"]
        let x1 = x['USD']
        // console.log(x["conversion_rates"])
        // console.log(x1)
        let input1 = document.querySelector(".input1").value
        let input2 = document.querySelector(".input2").value = parseFloat(input1 * x1).toFixed(2)
        let fee = document.querySelector(".fee2")
        let fee4 = fee.innerHTML = "200 INR"
        let totalfee = document.querySelector(".fee3")
        totalfee.innerHTML = fee4
    }
})







