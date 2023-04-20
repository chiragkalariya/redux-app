import React from 'react'

function Shop(props) {
    console.log("props", props);
    return (
        <div className='container'>
            <div className='item_container py-5'>
                <div className="item">
                    <div className="item_img">
                        <img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="ffgds" />
                    </div>
                    <div className="item_body">
                        <h3 className="item_title text-start">Iphone 10</h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="item_price">1000</span>
                            <button 
                            className='btn btn-primary' 
                            onClick={
                                () => props.addToCartHandler({prise: 1000, name: "iphone 10"})
                                }>
                                Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
