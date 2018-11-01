import React, { Component } from 'react';

const ImageMessage = (props) => {
    return <img className="sc-message--image" src={props.data.source} />
}

export default ImageMessage