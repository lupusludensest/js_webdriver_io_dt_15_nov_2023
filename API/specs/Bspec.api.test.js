const get_request_b = require('../Btest_axios_get_dt_16_nov_2023');

describe ('Get request B', async () => {
    it('Get request B', async () => {
        const response = await get_request_b({

        })
        expect(response.statusText).toEqual('OK');
        expect(response.status).toEqual(200);
    })
})