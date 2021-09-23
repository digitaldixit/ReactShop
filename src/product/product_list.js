import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetDummyProductData } from '../product/product_action';
import { Link } from "@reach/router";
class Productlist extends Component {


    componentDidMount() {
        console.log('-------------------this is product list')
        this.props.GetDummyProductData();
    }
    render() {
        const { products } = this.props;
        if (!products) {
            return (
                <>Product is Loading.........</>
            )
        }
        console.log("-----products", products);
        return (
            <div id="content-container" className="signup">
                <div className="container mt-4">
                    <div className="row">
                    {
                        products.map((product, index) => (
                            <div className="col-sm-3">
                                <div id="product_box_default" className="card bg-light product-card mb-4">
                                    <div className="card-image alc-card-hover overflow-hidden">
                                        <img
                                            style={{ height: '18rem' }}
                                            className="card-img-top img-fluid"
                                            src={product.image} alt={product.title}
                                            title={product.title}
                                        />
                                    </div>
                                    <div className="card-body text-center product-card-body">
                                        <h5 className="card-title text-truncate">
                                            <Link className="text-decoration-none link-primary" to="/"> {product.title} </Link>
                                        </h5>
                                        <div className="product-price">

                                            <p className="price m-0">
                                                <span className="text-danger price  mr-2">{product.price}</span>

                                            </p>
                                        </div>
                                        <button type="submit" disabled="disabled" className="btn btn-outline-primary">
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.product.product_list

    }
}


export default connect(mapStateToProps, { GetDummyProductData })(Productlist);
