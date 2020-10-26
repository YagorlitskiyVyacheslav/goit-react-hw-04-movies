import React from 'react';
import ButtonComponent from './button.components';

function Button({onClick}) {
    return <ButtonComponent onClick={onClick}>Go back</ButtonComponent>;
}

export default Button;