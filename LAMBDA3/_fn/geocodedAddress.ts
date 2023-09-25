import { ConfigReader } from "../config/configreader";
import { AddressDTO } from "../addressDTO";
const axios = require('axios');

export async function geocodedAddress(search: string) {
    try {
        const cfgReader = new ConfigReader('./config/app.yml');

        const params = new URLSearchParams();
        params.append("where", JSON.parse(JSON.stringify(search)));
        params.append("outfields", "*");
        params.append("f", "geojson");

        const config = {
            method: 'get',
            url: cfgReader.get("geocodedaddressing"),
            params: params,
            headers: {
                'Content-Type': 'application/geojson',
                'accept': '*/*',
                'referrerPolicy': 'strict-origin-when-cross-origin'
            }

        }

        // console.log(config)
        let res = await axios(config)
        const _co = res.data["features"][0]["geometry"]["coordinates"]
        const _co_feed = _co[0] + "," + _co[1]
        
        return JSON.parse(JSON.stringify(_co))

    } catch (err) {
        console.log(err)
    } finally {
        //clean up code here
    }
}

