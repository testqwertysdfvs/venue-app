import {fsqAccessData, fsqApiUrl} from "./constants";

export const api = {
    venues: {
        search: (address, query, limit = 3) => fetch(`${fsqApiUrl}/explore?locale=en&client_id=${fsqAccessData.clientId}&client_secret=${fsqAccessData.clientSecret}&query=${query}&near=${address}&v=20190724&limit=${limit}`)
            .then(res => res.json()),

        venueDetails: venueId =>fetch(`${fsqApiUrl}/${venueId}?locale=en&client_id=${fsqAccessData.clientId}&client_secret=${fsqAccessData.clientSecret}&v=20190724`)
            .then(res => res.json()),
    }
}
