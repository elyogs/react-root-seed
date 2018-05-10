import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

const MenuSubmenus = ({ match }) => {
    return (

        <div>

            <div className="jumbotron text-center">
                <h1>Component Title</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Link to={`${match.url}/submenu1`}>SubMenu #1</Link>
                    </div>
                    <div className="col-sm-4">
                        <Link to={`${match.url}/submenu2`}>SubMenu #2</Link>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <h1>Chosen Submemu --> </h1>
                    <Route path={`${match.path}/submenu1`} render={() => { return <h1> submenu1</h1> }} />
                    <Route path={`${match.path}/submenu2`} render={() => { return <h1> submenu2</h1> }} />
                </div>
            </div>

        </div>
    );
}

export default MenuSubmenus;