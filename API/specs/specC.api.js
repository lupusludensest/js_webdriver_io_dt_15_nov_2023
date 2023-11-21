const get_request = require('../testC_axios_get_dt_16_nov_2023');

describe('Get request', async () => {
    it('Get request', async () => {
        const response = await get_request({

        })
        expect(response.statusText).toEqual('OK')
    })
})