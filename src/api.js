import {fsqAccessData, fsqApiUrl} from "./constants";

export const getVenuesForLunch = (address, limit = 3) => fetch(`${fsqApiUrl}?client_id=${fsqAccessData.clientId}&client_secret=${fsqAccessData.clientSecret}&query=lunch&near=${address}&v=20190724&limit=${limit}`)
    .then(res => res.json());
