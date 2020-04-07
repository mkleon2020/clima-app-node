const axios = require('axios');

const getLugarLaLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '6206abc534mshe007f0f36821c1ep132c3ajsnf22cce6414f3' }

    });

    const resp = await instance.get();
    if (resp.data.Results.lenght === 0) {

        throw new Error(`No hay resultador para ${dir}`);

    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }

}
module.exports = {
    getLugarLaLng
}