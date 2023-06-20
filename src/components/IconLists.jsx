import React from 'react';
const IconLists = ({data, classname}) => {
    return (
        <ul className={classname}>
            {
                data.map(({id, href, icon }) =>
                    <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
                            <i className={`fab ${icon}`}></i>
                        </a>
                    </li>
                )
            }
        </ul>
    );
};

export default IconLists;