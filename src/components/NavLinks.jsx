import React from 'react';

const NavLinks = ({id, data, classname, isFooter}) => {
    console.log("isF: ", isFooter)
    return (
        <ul className={classname} id={id}>
            {
                data.map(({href, text}) =>
                    <li key={text}>
                        <a href={href} className={isFooter ? "footer-link" : "nav-link"}> {text} </a>
                    </li>
                )
            }
        </ul>
    );
};

export default NavLinks;