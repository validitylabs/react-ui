import * as React from 'react';

export interface IProps {
    text: string;
};

export const Hello: React.SFC<IProps> = (props) => (
    <h1>{ props.text }</h1>
)
