'use strict';

import React from "react";
import { Link } from 'react-router';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import './styles.scss';


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange( val ) {
    console.log( "Selected: " + val );
}

class App extends React.Component {

    render() {
        return <div className="test">
            <h1>App</h1>
            <Link to="/about">About</Link>
            <Select
                name="form-field-name"
                value="one"
                options={options}
                onChange={logChange}
            />
        </div>;
    }

}


export default App;
