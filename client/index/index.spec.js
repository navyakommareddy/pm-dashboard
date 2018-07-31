// ( contrived ) Example function with failing test.
// Edit add function to make test pass!

import test   from 'ava';
import React  from 'react';
import render from 'react-test-renderer';


import Example from './sample-component.jsx';

const add = ( a, b ) => a + b;

test( 'it should add two numbers', t => {
    t.is( add( 1, 2 ), 3 );
});

test( 'it should work with negative numbers', t => {
    t.is( add( 1, -2 ), -1 );
});

test( '<Example /> component', t => {
    const ex = render.create( <Example /> ).toJSON();
    t.snapshot( ex );
});
