import React from 'react';

const Menu = () => {
    return (
        <div>

            <div className="jumbotron text-center">
                <h1>Title of this section</h1>
                <p>Description of your section</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Title 1</h3>
                        <p>Paragraph 1</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Title 2</h3>
                        <p>Paragraph 2</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Title 3</h3>
                        <p>Paragraph 3</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Menu;