import { ConfigReader } from "../config/configreader";
import { AddressDTO } from "../addressDTO";
const axios = require('axios');

export async function pointGeometry(coordinates: string) {
    try {
        const cfgReader = new ConfigReader('./config/app.yml');
        const params = new URLSearchParams();
        params.append("geometry", coordinates);
        params.append("geometryType", "esriGeometryPoint");
        params.append("inSR", "4326");
        params.append("spatialRel", "esriSpatialRelIntersects");
        params.append("outFields", "*");
        params.append("returnGeometry", "false");
        params.append("f", "geojson");

        const config = {
            method: 'get',
            url: cfgReader.get("adminboundaries"),
            params: params,
            headers: {
                'Content-Type': 'application/geojson',
                'accept': '*/*',
                'referrerPolicy': 'strict-origin-when-cross-origin'
            }


        }

        let res = await axios(config)
        const _aDTO: AddressDTO = {
            location: coordinates,
            districtName: res.data["features"][0]["properties"]["districtname"],
            suburbname: ""
        }


        return JSON.parse(JSON.stringify(_aDTO))

        //console.log(JSON.stringify(_aDTO));

        //console.log(res.data["features"][0]["properties"]);
    } catch (err) {
        console.log(err)
    } finally {
        //clean up code here
    }
}
