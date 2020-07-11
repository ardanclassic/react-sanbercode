import React from 'react';
import { Table } from 'react-bootstrap';
import Loading from 'components/loadingMode';

export default function tableStatistic(props) {
    const formatter = new Intl.NumberFormat('id-ID');
    const cellAdjust = (cell) => {
        if (window.innerWidth < 500) {
            const collapse = { whiteSpace: 'nowrap' };
            return <td style={collapse}>{ cell }</td>
        } else {
            return <td>{ cell }</td>
        }
    }

    const setTable = data => {
        return data.map((dataCountry, i=1) => {
            // exclude world country data
            if (data.country !== 'World') {
                return (
                    <tr key={ dataCountry.country } 
                        // highlight for Indonesia Country
                        className={ dataCountry.country === 'Indonesia' ? 'highlight' : null }>
                        <td>{ i + 1 }</td>
                        <td>
                            <img width={32} src={ dataCountry.countryInfo.flag } 
                                 alt="country-flag"/>
                        </td>
                        { cellAdjust(dataCountry.country) }
                        <td>{ formatter.format(dataCountry.cases) }</td>
                        <td>{ formatter.format(dataCountry.recovered) }</td>
                        <td>{ formatter.format(dataCountry.deaths) }</td>
                    </tr>
                )
            } else {
                return false;
            }
        })
    }

    return (
        <React.Fragment>
            <Table responsive>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>###</th>
                        <th>Country</th>
                        <th>Case</th>
                        <th>Recovered</th>
                        <th>Death</th>
                    </tr>
                </thead>
                
                <tbody>
                    { props.data ? setTable(props.data) : <Loading data="table" /> }
                </tbody>
            </Table>
        </React.Fragment>
    )
}
