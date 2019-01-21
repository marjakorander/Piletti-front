import React, { Component } from 'react';

class UusiPilettiKoodi extends Component {

    render() {
        if (this.props.showCode) { 
        return (
            <div>
                <h1>Koodisi on {this.props.code}</h1>
            </div>
        );
        } else {
            return (
                null
            )
        }
    }
}

export default UusiPilettiKoodi;