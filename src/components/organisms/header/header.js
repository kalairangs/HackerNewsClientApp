import React from 'react';

import NavigationLink from '../../molecules/navigationLink/navigationLink';

const Header = () => {
    const navLink = [
        {
            link: "/",
            text: "  HackerNews |  ",
        },
        {
            link: "/new",
            text: "new  |",
        },
        {
            link: "/show",
            text: " show   |   ",
        },
        {
            link: "/ask",
            text: "  ask    |",
        },
        
        {
            link: "/job",
            text: "job    ",
        },
    ];
    return (
        <React.Fragment>
            <div className="header">
                <NavigationLink data={navLink} />
            </div>
        </React.Fragment>
    )
}
export default Header;