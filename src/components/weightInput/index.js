import React, { Component } from 'react';

const WEIGHTSCALE = {
    pound: 'Pound',
    g: 'Gram',
    kg: 'Kilogram',
    ton: 'Ton'
};

export default class WeightInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onWeightChange(e.target.value);
    }

    render() {
        const { weight, weightScale } = this.props;
        return (
            <div className="inputScale">
                <p>{WEIGHTSCALE[weightScale]}</p>
                <input value={weight} onChange={this.handleChange} />
            </div>
        )
    }
}