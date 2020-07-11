import React from 'react';
import { Card } from 'react-bootstrap';

export default function countryInfo({ data, value, click, change, submit }) {
    const formatter = new Intl.NumberFormat('id-ID');
    return (
        <React.Fragment>
            <form onSubmit={submit} data-test="form-country" >
                <input type="text" placeholder="type the country . . ." 
                    value={value} onChange={change} /><br/>
                <button id="check_country" onClick={ click } data-test="btn-country" >Check!</button>
            </form>

            {/* check if parent not passing the country data */}
            { !data ? null :
                <div className="countryInfo">
                    <Card>
                        {
                            !data.countryInfo.flag ? null :
                            <Card.Img variant="top" src={ data.countryInfo.flag } />
                        }
                        <Card.Body>
                            <Card.Title>{ data.country }</Card.Title>
                            <div className="divider"></div>
                            <div className="group total">
                                <p>Total Case</p>
                                <p>{ formatter.format(data.cases) } </p>
                            </div>
                            <div className="group recovered">
                                <p>Total Recovered</p>
                                <p>{ formatter.format(data.recovered) } </p>
                            </div>
                            <div className="group death">
                                <p>Total Death</p>
                                <p>{ formatter.format(data.deaths) } </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
             }
        </React.Fragment>
    )
}
