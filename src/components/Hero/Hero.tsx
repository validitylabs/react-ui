import * as React from 'react';

export interface IProps {
    text: string;
};

export const Hero: React.SFC<IProps> = (props) => (
    <h1>{ props.text }</h1>
)
