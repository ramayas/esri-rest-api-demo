require("cross-fetch/polyfill");
require("isomorphic-form-data");

const { request } = require("@esri/arcgis-rest-request");


// request("https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query?where=address+%3D+%27346+PANORAMA+AVENUE+BATHURST%27&outFields=*&f=geojson")
//   .then(response => console.log(response));

request('https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query',
    {
        method: 'GET',
        params: {
            where: "address = '346 PANORAMA AVENUE BATHURST'",
            outfields: "*",
            f: "geojson"
        }
    })
    .then(function (res) {
        console.log(res)
        return res;
    })
;

