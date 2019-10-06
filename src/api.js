import {fsqAccessData} from "./constants";

export const getVenuesForLunch = (address, limit = 3) => fetch(`?client_id=${fsqAccessData.clientId}&client_secret=${fsqAccessData.clientSecret}&query=lunch&near=${address}&v=20190724&limit=${limit}`)
    .then(function() {
        // Code for handling API response
    })
    .catch(function() {
        // Code for handling errors
    });
