"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Function to call a GET API with parameters using node-fetch.
 *
 * @param url - The URL of the API.
 * @param params - The parameters to be included in the API request.
 *
 * @returns {Promise<any>} - A promise that resolves to the response from the API.
 */
function callGetAPI(url, params) {
    return __awaiter(this, void 0, void 0, function* () {
        // Construct the query string from the parameters
        const queryString = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        // Append the query string to the URL
        const apiUrl = `${url}?${queryString}`;
        try {
            // Make the GET request using node-fetch
            const response = yield (0, node_fetch_1.default)(apiUrl);
            const data = yield response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(`Error calling GET API: ${error}`);
            throw error;
        }
    });
}
// Usage example for the callGetAPI function.
// Example: Calling a GET API with parameters
const apiUrl = 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query';
const params = {
    where: "address = '346 PANORAMA AVENUE BATHURST'",
    outFields: "*",
    f: "geojson"
};
callGetAPI(apiUrl, params)
    .then((response) => {
    console.log('API response:', response);
})
    .catch((error) => {
    console.error('Error:', error);
});
