
import Header from "./HeaderComponent";
import Navbars from "./Navbars";
import HeaderSearchBars from "./HeaderSearchBars";
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { productDetails } from "../../redux/action/action.js"
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import SlideSlickOne from "./SlideSlickOne.js";
import { useHistory } from 'react-router-dom';
import data from "../../data.js"
// import { faCartShopping as faCartShoppingSolid } from '@fortawesome/free-solid-svg-icons';
// import { faCartShopping as faCartShoppingLight } from '@fortawesome/free-light-svg-icons';
// import { iconName } from '@fortawesome/free-solid-svg-icons';


// Add the icons to the library
// library.add(faCartShoppingSolid, faCartShoppingLight);

function ProductDeatil(props) {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     try {
    //         fetch('/api/products')
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Network response was not ok');
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setData(data);
    //                 setLoading(false);
    //             })
    //             .catch(error => {
    //                 setError(error);
    //                 setLoading(false);
    //             });
    //     } catch (error) {
    //         console.log("data fetching error", error)
    //     }
    // }, []);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;


    // console.log("data ===>", data)
    var productId = props.match.params.id

    // console.log("productId ===================?" , productId)

    // var product = data.find((x) => x._id === productId)

    var dispatch = useDispatch()

    useEffect(() => {
        console.log("useEffect ====>" ,productId)
        dispatch(productDetails(productId))
    }, [])

    var productDetail = useSelector((state) => state.productDetail)

    console.log("productDetail =====>", productDetail)

    const { loading, product, error } = productDetail

    console.log("productDetaild check the id ====>", product)

    const history = useHistory()

    // const buyHandler = (product) => {
    //     // history.push("/order-cart");
    //     props.history.push(`/order-cart/${product}`);

    // }

    const buyHandler = (product) => {
        
        // Navigate to the order cart
        props.history.push(`/order-cart/${product}`);
    };
    

    return (
        <div className="App">
            <div className="mainContainer">
                <header className="header"><Header /></header>
                <div className="headerSearchBar"><HeaderSearchBars /></div>
                <div className="navBar"><Navbars /></div>
                <main className="main">
                    {loading ? <div>Loading....</div> : (
                        <div className="productDetailContainer">
                            <div className="productDetailImag">
                                <div><img src={product.image} alt={product.image}></img></div>
                                <div>
                                    <div className="productDetailItem">
                                        <h4 className="p-mb-1" style={{ color: "#3E5FB0", fontSize: "1rem" }}>{product.name}</h4>
                                        <div>
                                            <div className="p-mb-1" style={{ color: "#999999" }}> {product.brand}</div>
                                            <div className="p-mb-1 SlideOneStock" style={{ color: "#999999" }}> {product.stock}</div>
                                            <div className="p-mb-1" style={{ color: "#999999" }}>List Price : {product.listprice}</div>
                                            <div className="p-mb-1" style={{ color: "#999999" }}>Our Price : <s>{product.ourPrice}</s> <span style={{ color: "#f7941d", fontWeight: "bold" }}>Rs : OurPrice</span></div>
                                            <div className="p-mb-1" style={{ color: "#999999" }}>Strandard Discount :<span style={{ color: "#3E5FB0" }}>{product.discount}</span></div>
                                            <div className="p-mb-1" style={{ color: "#999999" }}>You Save : {(product.listprice / 100) * 10} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productDetailBtn">
                                <div className="productDetailBtnOne">
                                    <Button onClick={() => buyHandler(product.id)} style={{ width: '200px' }}>
                                        <img src="/ing1.png" className="button-icon" />

                                        <span className="button-label">Buy Now</span>
                                    </Button>
                                </div>
                                {/* <div className="productDetailBtnTwo"> <Button icon="pi pi-check icon-move" style={{ width: '200px' }} >Buy Now</Button></div> */}
                                <div className="productDetailBtnTwo">
                                    <Button style={{ width: '200px' }}>
                                        <img src="/ing1.png" className="button-icon" />

                                        <span className="button-label">Buy Now</span>
                                    </Button>
                                </div>
                                <div className="product_favorites">
                                    <div>
                                        <FontAwesomeIcon icon={['fal', 'cart-shopping']} />
                                    </div>
                                    <div style={{ fontSize: "1rem", fontWeight: 500 }}>Add to Wishlist</div>
                                </div>
                                <div className="shareBtn">
                                    <div><ShareIcon /></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="productDetailDesc">
                        <div className="productDetailDescOne">
                            <h6 className="productDetailDescChildOne">Description</h6>
                            <div className="productDetailDescChildTwo">A sweeping journey through the ebbs and flows of Pakistan s history, from the ancient Indus Valley Civilization to contemporary times, this book not only uncovers the influences from Turkey, Persia, Arabia and Britain that have shaped this South Asian nation, but showcases the region s diverse, rich tapestry of peoples, and Pakistan s pluralistic, multicultural society. Chequered Past, Uncertain Future also describes the post-1947 shift - following the partition of India and the establishment of the Islamic Republic of Pakistan as the country became more religiously conservative and autocratic, intensifying sectarian and ethnic divisions. For most of the country s history, the people of Pakistan have found themselves under the control of military dictators who suppress civil liberties and freedom of speech and action a trend that persists today.</div>
                        </div>
                        <br></br>
                        <div className="productDetailDescOne">
                            <h6 className="productDetailDescChildOne">About the Author</h6>
                            <div className="productDetailDescChildTwo">Tahir Kamran is Head of the Department of the Liberal Arts at Beaconhouse National University, Lahore, Director of the Khaldunia Centre for Historical Research and the editor of the Pakistan Journal of Historical Studies. His books include Colonial Lahore: A History of the City and Beyond (with Ian Talbot, 2017).</div>
                        </div>
                    </div>
                    <SlideSlickOne />
                </main>
                <footer className="footer">footer</footer>
            </div>
        </div>
    )
}

export default ProductDeatil