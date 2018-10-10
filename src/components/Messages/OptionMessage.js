import React, { Component } from 'react';
// import chatIconUrl from './../../assets/chat-icon.svg';


const OptionMessage = (props) => {
    return <div className="sc-message--text">
        {props.data.title}
        <ul>
            {props.data.options.map((item) =>
                <li>
                    {item.label}
                </li>
            )}
        </ul>
    </div>
}

export default OptionMessage