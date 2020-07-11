import React, { Component } from 'react';

const satuanJarak = {
    feet: 'Feet',
    m: 'Meter',
    km: 'Kilometer',
    mile: 'Mile'
};

export default class JarakInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onJarakChange(e.target.value);
    }

    render() {
        const { jarak, satuan } = this.props;
        return (
            <div className="inputScale">
                <p>{satuanJarak[satuan]}</p>
                <input value={jarak} onChange={this.handleChange} />
            </div>
        )
    }
}