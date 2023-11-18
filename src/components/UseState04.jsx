import React from 'react';
import { useState } from 'react';
import './UseState04.css'
import UseState04a from './UseState04a';
export default () => {

    return (
        <>
            <h4>UseState 4</h4>
            <div className='layout'>
                <UseState04a valor={1} />
                <UseState04a valor={5} />
                <UseState04a valor={10} />
            </div>
        </>
    )
}