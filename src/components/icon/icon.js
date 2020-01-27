
import React from 'react';
import iconPaths from '../../icons';// the file exported from IcoMoon

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

const Icon = props => {
    const size = props.size || 22
    return (
    <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path d={getPath(props.icon)}></path>
    </svg>
)
};

export default Icon;
