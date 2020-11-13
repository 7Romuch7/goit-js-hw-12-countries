const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

export default class NewFetchCountries {
    constructor() {
        this.searchCountry = '';
    }
    fetchCountries(query) {
        const paramName = `${query}`;
        return fetch(BASE_URL + paramName)
            .then(res => res.json());
    }
};
