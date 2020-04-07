const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
}).argv;

//argv.direccion

// lugar.getLugarLaLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(data) => {

    try {
        const co = await lugar.getLugarLaLng(data);
        const tem = await clima.getClima(co.lat, co.lng);
        return `El clima de ${co.direccion} es de ${tem}. `;
    } catch (e) {

        return `No se pudo obtener el clima de clima de ${data} `;

    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);