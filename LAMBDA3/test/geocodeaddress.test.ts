require('@jest/globals');
const axios = require('axios');
const geocodedAddress = require('../_fn/geocodedAddress');
jest.mock('axios');

describe('geocodedAddress', () => {
    it('fetches successfully data from an API', async () => {
        const data = "149.56705027261992, -33.42968429289573";

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(geocodedAddress("address = '346 PANORAMA AVENUE BATHURST'")).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query?where=address+%3D+%27346+PANORAMA+AVENUE+BATHURST%27&outFields=*&f=geojson`,
          );
       
    });
});
