import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGlobalInfo, actionCountryInfo, actionTableCountry } from 'redux/action';
import { CountryInfo, TableStatistic, Loading, GlobalInfo } from 'components';
import './style.scss';

function useCorona(props) {
    // redux action props
    const { actionTableCountry, actionCountryInfo, actionGlobalInfo } = props;

    // redux state prop
    const { tableStatistic, globalInfo } = props;

    // first init action
    const [country, setCountry] = useState("");
    useEffect(() => {
        actionGlobalInfo();
        actionTableCountry();
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        actionCountryInfo(country);
        setCountry("")
    }
    
    return (
        <div className="about-area">
            <h1>Covid-19 Global Info</h1>
            { globalInfo ? <GlobalInfo data={globalInfo} /> : <Loading data="global-info" /> }
            { tableStatistic ? <TableStatistic data={tableStatistic} /> : <Loading data="table" /> }

            <div className="divider"></div>

            <CountryInfo data={props.country} submit={handleSubmit} click={ handleSubmit }
                value={country} change={e => setCountry(e.target.value)} />
        </div>
    )
}

const reduxState = (state) => ({
    globalInfo: state.globalInfo,
    country: state.country,
    tableStatistic: state.tableStatistic
})

const reduxDispatch = dispatch => ({
    actionCountryInfo : (input) => dispatch(actionCountryInfo(input)),
    actionTableCountry : () => dispatch(actionTableCountry()),
    actionGlobalInfo : () => dispatch(actionGlobalInfo())
})

export default connect(reduxState, reduxDispatch)(useCorona)