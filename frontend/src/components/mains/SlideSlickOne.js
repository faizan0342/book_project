// src/index.js or src/App.js
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose a theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons
import 'primeflex/primeflex.css';                          // PrimeFlex (Optional)
import { useHistory } from 'react-router-dom';

// src/App.js
import React, { useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../redux/action/action.js";

function SlideSlickOne() {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const dispatch = useDispatch();
    const productItem = useSelector((state) => state.product);
    const { loading, product, error } = productItem;

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const history = useHistory();

    const productDetail = (id) => {
        console.log("Product ID:", id);
        history.push("/" + id);
    }

    const productTemplate = (x) => {
        return (
            <div className="product-item">
                <div className="product-item-content center">
                    <div className="p-mb-3">
                        <img onClick={() => productDetail(x._id)} src={x.image} alt={x.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1" style={{ color: "#3E5FB0", fontSize: "1rem" }}>{x.name}</h4>
                        <div>
                            <div className="p-mb-1" style={{ color: "#999999" }}> {x.brand}</div>
                            <div className="p-mb-1 SlideOneStock" style={{ color: "#999999" }}> {x.stock}</div>
                            <div className="p-mb-1" style={{ color: "#999999" }}>List Price : {x.listprice}</div>
                            <div className="p-mb-1" style={{ color: "#999999" }}>Our Price : <s>{x.ourPrice}</s> <span style={{ color: "#f7941d", fontWeight: "bold" }}>Rs : {x.ourPrice}</span></div>
                            <div className="p-mb-1" style={{ color: "#999999" }}>Strandard Discount :<span style={{ color: "#3E5FB0" }}>{x.discount}</span></div>
                            <div className="p-mb-1" style={{ color: "#999999" }}>You Save : {(x.listprice / 100) * 10} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="controllBtn">
            <div className='sideSlideOneNewRelease'>
                <h5>New Releases</h5>
                <div><i className="pi pi-angle-right"></i></div>
                <div>View All</div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <Carousel
                    value={product}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                />
            )}
        </div>
    );
}

export default SlideSlickOne;
