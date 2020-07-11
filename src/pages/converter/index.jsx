import React, { Component } from 'react';
import { JarakInput, WeightInput } from 'components';
import { Row, Col } from 'react-bootstrap';
import { toFeet, toMeter, toKilometer, toMil, tryConvert,
         toGram, toKilogram, toPound, toTon, weightConvert } from 'utils';
import "./style.scss";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            satuan: 'm', jarak: '',
            weightScale: 'kg', weight: ''
        };

        /** Distance Method Binding */
        this.handleFeetChange = this.handleFeetChange.bind(this);
        this.handleMeterChange = this.handleMeterChange.bind(this);
        this.handleKilometerChange = this.handleKilometerChange.bind(this);
        this.handleMileChange = this.handleMileChange.bind(this);
        
        /** Weight Method Binding */
        this.handlePoundChange = this.handlePoundChange.bind(this);
        this.handleGramChange = this.handleGramChange.bind(this);
        this.handleKilogramChange = this.handleKilogramChange.bind(this);
        this.handleTonChange = this.handleTonChange.bind(this);
    }

    /** Distance Method */
    handleFeetChange(jarak) { this.setState({satuan: 'feet', jarak}) }
    handleMeterChange(jarak) { this.setState({satuan: 'm', jarak}) }
    handleKilometerChange(jarak) { this.setState({satuan: 'km', jarak}) }
    handleMileChange(jarak) { this.setState({satuan: 'mile', jarak}) }
    
    /** Weight Method */
    handlePoundChange(weight) { this.setState({weightScale: 'pound', weight}) }
    handleGramChange(weight) { this.setState({weightScale: 'g', weight}) }
    handleKilogramChange(weight) { this.setState({weightScale: 'kg', weight}) }
    handleTonChange(weight) { this.setState({weightScale: 'ton', weight}) }

    render() {
        const { jarak, satuan, weight, weightScale } = this.state;
        
        // set distance scale
        const kaki = satuan !== 'feet' ? tryConvert(satuan, jarak, toFeet) : jarak;
        const meter = satuan !== 'm' ? tryConvert(satuan, jarak, toMeter) : jarak;
        const kilometer = satuan !== 'km' ? tryConvert(satuan, jarak, toKilometer) : jarak;
        const mil = satuan !== 'mile' ? tryConvert(satuan, jarak, toMil) : jarak;
        
        // set weight scale
        const pound = weightScale !== 'pound' ? weightConvert(weightScale, weight, toPound) : weight;
        const gram = weightScale !== 'g' ? weightConvert(weightScale, weight, toGram) : weight;
        const kilogram = weightScale !== 'kg' ? weightConvert(weightScale, weight, toKilogram) : weight;
        const ton = weightScale !== 'ton' ? weightConvert(weightScale, weight, toTon) : weight;
        
        return (
            <React.Fragment>
                <div className="converter-area">
                    <h1>Converter Area</h1>
                    <div className="divider"></div>
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="group distance">
                                <h1>Distance Converter</h1>
                                <JarakInput satuan="feet" jarak={kaki} onJarakChange={this.handleFeetChange} />
                                <JarakInput satuan="m" jarak={meter} onJarakChange={this.handleMeterChange} />
                                <JarakInput satuan="km" jarak={kilometer} onJarakChange={this.handleKilometerChange} />
                                <JarakInput satuan="mile" jarak={mil} onJarakChange={this.handleMileChange} />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="group weight">
                                <h1>Weight Converter</h1>
                                <WeightInput weightScale="g" weight={gram} onWeightChange={this.handleGramChange} />
                                <WeightInput weightScale="pound" weight={pound} onWeightChange={this.handlePoundChange} />
                                <WeightInput weightScale="kg" weight={kilogram} onWeightChange={this.handleKilogramChange} />
                                <WeightInput weightScale="ton" weight={ton} onWeightChange={this.handleTonChange} />
                            </div>
                        </Col>
                    </Row>

                </div>
            </React.Fragment>
        )
    }
}
