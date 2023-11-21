const axios = require('axios');

async function get_request() {

    const response = await axios.get('https://my-api.com/cats/');

    if(response.data.name === 'Garfield' && response.data.age === 3) {
        console.log('Garfield exists!');
    } else {
        console.log('Garfield not found');
    }

    // console.log(response.data);
    // console.log(response.statusText);
    return response
}

module.exports = get_request