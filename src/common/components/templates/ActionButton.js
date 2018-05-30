import React from 'react';
import { Button } from 'material-ui';

const ActionButton = ({ name, onClick }) => {
    return (
        <Button
            fullWidth={true}
            onClick={() => {
                onClick();
            }}
        >
            {name}
        </Button>
    );
};

export default ActionButton;
