import React from 'react';

const Button = props => <button type={props.buttonData.type} className={props.buttonData.class} onClick={ (event) => props.buttonData.clickHanlder(event)}>{props.buttonData.text}</button>

export default Button;