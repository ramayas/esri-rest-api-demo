import { geocodedAddress } from "./_fn/geocodedAddress"
import { pointGeometry } from "./_fn/pointGeometry"


async function asyncAPICall() {
    console.log('calling');
    const _co = await geocodedAddress("address = '346 PANORAMA AVENUE BATHURST'");
    console.log(_co);
    const result=await pointGeometry(_co)
    console.log(result);
   
}

asyncAPICall()