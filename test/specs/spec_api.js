const post_request = require('../../API/testA_axios_post_dt_16_nov_2023');

describe ('Post request', async () => {
    it('Post request', async () => {
        const response = await post_request({
            name: 'Garfield',
            age: 3
        })
        expect(response.statusText).toEqual('OK')
    })
} )