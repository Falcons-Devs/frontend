import React from 'react';

import { Button, Link } from './styles';


export const Buttons = ({ value, to }) => {
    return (
        <>
        {to  ?
            <Link to='/signin'>Registrarse</Link> :
        
            <Button> { value } </Button>
        }
        </>
    )
}
