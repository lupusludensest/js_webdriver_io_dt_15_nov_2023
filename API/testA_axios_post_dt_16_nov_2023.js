// axios-demo.js

const axios = require('axios');

async function main() {

    try {
        const response = await axios({
            method: 'POST',
            url: 'cats',
            data: {
                name: 'Garfield',
                age: 3
            },
            baseURL: 'https://my-api.com',
            timeout: 1000
        });

        console.log(response.data);

    } catch (error) {
        console.error(error);
    }

}

main();