import React from 'react';
import FooterNavLink from '../../molecules/footerNavLink/footerNavLink';

const footer = () => {
    const navLink = [
        {
            link: "/guidelines",
            text: "  Guidelines |  ",
        },
        {
            link: "/FAQ",
            text: "FAQ   |  ",
        },
        {
            link: "https://github.com/HackerNews/API",
            text: " API  |   ",
        },
        {
            link: "/security",
            text: "  Security",
        },
    ];
   return(
       <React.Fragment>
           <div className="footer">
                <FooterNavLink data={navLink} />
            </div>
       </React.Fragment>
   )
}
export default footer;