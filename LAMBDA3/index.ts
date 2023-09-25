import { ConfigReader } from "./config/configreader";
import { AddressDTO } from "./addressDTO";
const axios = require('axios');


async function makeRequest(search: string) {
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

        console.log(config)
        let res = await axios(config)
        const _co = res.data["features"][0]["geometry"]["coordinates"]
        const _co_feed = _co[0] + "," + _co[1]

        const _aDTO: AddressDTO = {
            location: res.data["features"][0]["properties"]["address"],
            districtName: "",
            suburbname: ""
        }

        console.log(_co_feed);
        getPointGeometry(_co_feed, cfgReader, _aDTO);

        console.log(res.data["features"][0]["geometry"]["coordinates"]);
    } catch (err) {
        console.log(err)
    } finally {
        //clean up code here
    }

}

async function getPointGeometry(coordinates: string, cfgReader: ConfigReader, _aDTO: AddressDTO) {
    try {
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

        _aDTO.districtName = res.data["features"][0]["properties"]["districtname"]

        console.log(JSON.stringify(_aDTO));

        console.log(res.data["features"][0]["properties"]);
    } catch (err) {
        console.log(err)
    } finally {
        //clean up code here
    }

}

makeRequest("address = '346 PANORAMA AVENUE BATHURST'");


