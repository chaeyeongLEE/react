import Button from './Button';
import React from 'react'

export default function SkyblueButton({ text, clickEvent }) {
return (<Button text={text} clickEvent={clickEvent}
mainColor="#7EDCFA"
subColor="#3A82E0"
hoverColor="#CFECF2"
/>
);
}