import React from 'react';
import {Button} from '../common/Button'
import PropTypes from 'prop-types'

export const NavBarComponent = ({name}) => {
        const handleClick = () => {
                console.log(name);
        };
        return(<div>
                <Button onClick={handleClick} name={name} />
        </div>);
};

NavBarComponent.propTypes = {
        name: PropTypes.string
};

