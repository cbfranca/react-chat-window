import React, { Component } from 'react';
// import chatIconUrl from './../../assets/chat-icon.svg';


const OptionMessage = (props) => {
    return <div className="sc-message--text">
        {props.data.title}
        <ul>
            {props.data.options.map((item, index) =>
                <li key={index}>
                    {item.label}
                </li>
            )}
        </ul>
    </div>
}

export default OptionMessage