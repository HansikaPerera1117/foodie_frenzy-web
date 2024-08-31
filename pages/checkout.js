"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// Import your components and data
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";
import CheckoutForm from "../src/components/CheckoutForm";
import CardDetailsForm2 from "../src/components/CardDetailsForm2";

// Metadata for the page
export const metadata = {
  title: {
    default: "Checkout",
  },
  description: "Complete your purchase by filling out the checkout form.",
};

const Checkout = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    document.title = "Checkout | Foodie Frenzy Restaurant";
    setCartDetails(
      localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST"))
        : []
    );
  }, []);

  useEffect(() => {
    const total = cartDetails.reduce((acc, item) => acc + item.total, 0);
    setCartSubTotal(total);
    setCartTotal(total + 250);
  }, [cartDetails]);

  const CartData = [
    {
      id: 1,
      name: "Delicious Vegetables Italian Pizza",
      image: " assets/images/product/product-1.png",
      quantity: 2,
      price: 253.59,
    },
    {
      id: 2,
      name: "Baked Chicken Wings Asian Tomatoes",
      image: "assets/images/product/product-3.png",
      quantity: 1,
      price: 240.59,
    },
    {
      id: 3,
      name: "Baked Chicken Wings Asian Tomatoes",
      image: "assets/images/product/product-3.png",
      quantity: 1,
      price: 240.59,
    },
    {
      id: 4,
      name: "Baked Chicken Wings Asian Tomatoes",
      image: "assets/images/product/product-3.png",
      quantity: 1,
      price: 240.59,
    },
  ];
  // Calculate total price
  const subtotal = CartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 250;
  const total = subtotal + shipping;

  return (
    <Layout>
      <PageBanner pageName={"Checkout"} title="Checkout" />{" "}
      {/* Checkout section */}
      <section className="checkout-section mt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CheckoutForm />
            </div>
            <div className="col-lg-4">
              <div className="order-summaryorder-summary">
                <h3>Order Summary</h3>
                <div className="order-items mt-3">
                  {cartDetails.map((item, index) => (
                    <div key={index} className="order-item my-4">
                      <Link href={`/product/${item.id}`}>
                        <div className="item-details d-flex">
                          <img
                            src={item.filesUrl}
                            alt={item.name}
                            style={{ maxWidth: "40%" }}
                            className="item-image"
                          />
                          <div className="ms-4">
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.qty}</p>
                            <p className="item-total">
                              LKR{(item.price * item.qty).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="order-totals mt-4">
                  <div className="subtotal d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span className="fw-bold">
                      LKR{cartSubTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="shipping d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>LKR{shipping.toFixed(2)}</span>
                  </div>
                  <div className="total fw-bold d-flex justify-content-between">
                    <span>Total</span>
                    <span>LKR{cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of checkout section */}
    </Layout>
  );
};

export default Checkout;
