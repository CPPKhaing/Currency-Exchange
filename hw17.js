let m = 0;

fetch("https://open.er-api.com/v6/latest/USD")
    .then(res => res.json())
    .then(data => {
        console.log(data.rates)
        for (const key in data.rates) {
            $("#country").append(`<option value="${data.rates[key]}">${key} </option>`) 
        }
    })
    .catch(error => console.log(error))

function selectedValue(obj){
    m =  obj.value;
}

function press(obj){
    $("#money").text( obj.value * m)
}