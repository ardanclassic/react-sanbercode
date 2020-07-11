import axios from 'axios';

export const actionGlobalInfo = () => async (dispatch) => {
    let url = `https://corona.lmao.ninja/v2/all`;
    const info = await axios.get(url);
    if (info) dispatch({ type: 'GLOBAL_INFO', value: info.data });
}

export const actionCountryInfo = (inputCountry) => async (dispatch) => {
    if (inputCountry !== '') {
        const url = `https://corona.lmao.ninja/v2/countries/${inputCountry}`;
        const info = await axios.get(url);
        if (info) dispatch({ type: 'COUNTRY_INFO', value: info.data });
    }
}

export const actionTableCountry = () => async (dispatch) => {
    const url = `https://corona.lmao.ninja/v2/countries?sort=country`;
    const info = await axios.get(url);
    if (info) {
        const sortData = info.data.sort((a, b) => ((b.cases) - (a.cases)));
        const limit_100 = sortData.slice(0, 100);
        dispatch({ type: 'ALL_STATISTIC', value: limit_100 });
    }
}