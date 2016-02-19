'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" getComponent={( location, callback ) => {
            require.ensure( [], function ( require ) {
                callback( null, require( './app' ).default );
            } );
        }}/>
        <Route path="/about" getComponent={( location, callback ) => {
            require.ensure( [], function ( require ) {
                callback( null, require( './about' ).default );
            } );
        }}/>
    </Router>,
    document.getElementById( 'root' )
);
