import React from 'react';
import MenuLink from '../../atoms/menuLink/menuLink';

const navigationLink = (props) => {
    return(
        <React.Fragment>
            <div className="header">
            {props.data.map((item, key) => {
                    return (
                        <div className="navlink" key={key}>
                            <MenuLink item ={item}/>
                        </div>
                    );
                })}
                  </div>
        </React.Fragment>
    )
}
export default navigationLink;