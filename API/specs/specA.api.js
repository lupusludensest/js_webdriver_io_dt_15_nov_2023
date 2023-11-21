const post_request_a = require('../testA_axios_post_dt_16_nov_2023');

describe ('Post request A', async () => {
    it('Post request A', async () => {
        const response = await post_request_a({
            name: 'Garfield',
            age: 3
        })
        expect(response.statusText).toEqual('OK');
        expect(response.status).toEqual(200);
    })
} )