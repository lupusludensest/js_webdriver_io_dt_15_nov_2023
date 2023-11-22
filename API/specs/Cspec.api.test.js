const get_request_c = require('../Ctest_axios_get_dt_16_nov_2023');

describe('Get request C', async () => {
    it('Get request C', async () => {
        const response = await get_request_c({

        })
        expect(response.statusText).toEqual('OK');
        expect(response.status).toEqual(200);
    })
})