const axios = require("axios");

//call external API
const externalAPICall = async (apiEndpoint) => {
    
        response = await axios.get(apiEndpoint);
        museums = response.data[0];
        console.log('API result : ');
        console.log(museums);
        return museums;
}


//calculate total, highest and lowest visitors count
const calculateCount = (museums, month, ignore) => {

    sum = 0;
    max = 0;
    min = Number.MAX_VALUE;
    for (let key in museums) {
        if (key != month && key != ignore) {
            let value = parseInt(museums[key]);
            sum = sum + value;
            if (value > max) {
                highest = key;
                max = value;
            }
            if (value < min) {
                lowest = key;
                min = value;
            }
        }
    }
    result = {
        'total': sum,
        'highest': highest,
        'max': max,
        'lowest': lowest,
        'min': min
    }
    return result;
}

// Exported functions
module.exports = {

    calculateCount : calculateCount,
    externalAPICall : externalAPICall

}