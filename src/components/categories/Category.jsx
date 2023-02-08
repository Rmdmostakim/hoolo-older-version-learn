import React from 'react';
import Class from '../../assets/css/dropdown.module.css';

function Category() {
    return (
        <div className="w-100">
            <div className="w-50">
                <nav className="navmenu d-grid align-items-center mt-5">
                    <ul className={Class.grand}>
                        <li className="d-flex">
                            Grand 1
                            <ul className={Class.parent}>
                                <li className="d-flex">
                                    Parent 1
                                    <ul className={Class.child}>
                                        <li>Child 1</li>
                                        <li>Child 2</li>
                                        <li>Child 3</li>
                                        <li>Child 4</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Category;
