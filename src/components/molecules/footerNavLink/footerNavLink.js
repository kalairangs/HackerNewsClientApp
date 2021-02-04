import React from 'react';
import MenuLink from '../../atoms/menuLink/menuLink';


const footerNavLink = (props) => {
    return(
        <React.Fragment>
                        {props.data.map((item, key) => {
                    return (
                        <div className="" key={key}>
                            <MenuLink item ={item}/>
                        </div>
                    );
                })}
        </React.Fragment>
    )
}
export default footerNavLink;