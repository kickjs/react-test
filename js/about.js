'use strict';

import React from "react";
import { Link } from 'react-router';
import 'react-select/dist/react-select.css';
import Select from 'react-select';


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange( val ) {
    console.log( "Selected: " + val );
}

class About extends React.Component {

    render() {
        return <div>
            <h1>About</h1>
            <Link to="/">App</Link>
            <Select
                name="form-field-name"
                value="one"
                options={options}
                onChange={logChange}
            />
        </div>;
    }

}


export default About;
