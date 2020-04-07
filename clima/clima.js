const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=269aaf226b838f0134cfb5ecc5b84bdc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {

    getClima
}