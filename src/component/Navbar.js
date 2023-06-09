import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Navbar(props) {
    console.log("navbar", props.data);


    // const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    // React.useEffect(() => {
    //     dispatch(loadposts());
    // }, [dispatch]);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='btn btn-dark cart_button'>Cart<span className='cart_count'>{props.data}</span></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
