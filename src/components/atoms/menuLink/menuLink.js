import React from 'react';
import { Link } from 'react-router-dom';
const menuLink = (props) => {
    console.log(props);
    return(
        <React.Fragment>
            <div className="">
                            <Link
                                to={{
                                    pathname: props.item.link
                                }}
                            >{props.item.text}</Link>
                  </div>
        </React.Fragment>
    )
}
export default menuLink;