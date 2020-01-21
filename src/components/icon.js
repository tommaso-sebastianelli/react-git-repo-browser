
import React from 'react';
import iconPaths from '../icons';// the file exported from IcoMoon

function getPath(iconName) {
    const icon = iconPaths.icons
        .find(i => i.tags[0] === iconName);

    if (icon) {
        return icon.paths[0];
    } else {
        console.warn(`icon ${iconName} does not exist.`);
        return '';
    }
}

const Icon = props => (
    <svg width="22" height="22" viewBox="0 0 1024 1024">
        <path d={getPath(props.icon)}></path>
    </svg>
);

export default Icon;
