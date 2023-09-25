import fetch from 'node-fetch';
 
/**
 * Function to call a GET API with parameters using node-fetch.
 *
 * @param url - The URL of the API.
 * @param params - The parameters to be included in the API request.
 *
 * @returns {Promise<any>} - A promise that resolves to the response from the API.
 */
async function callGetAPI(url: string, params: Record<string, string>): Promise<any> {
    // Construct the query string from the parameters
    const queryString = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
 
    // Append the query string to the URL
    const apiUrl = `${url}?${queryString}`;
 
    try {
        // Make the GET request using node-fetch
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error(`Error calling GET API: ${error}`);
        throw error;
    }
}
 
// Usage example for the callGetAPI function.
 
// Example: Calling a GET API with parameters
const apiUrl = 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/FeatureServer/1/query';
const params = {
    where: "address = '346 PANORAMA AVENUE BATHURST'",
    outFields: "*",
    f:"geojson"
};
 
callGetAPI(apiUrl, params)
    .then((response) => {
        console.log('API response:', response);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });