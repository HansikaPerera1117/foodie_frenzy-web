import React from "react";
import Link from "next/link";

// Import your components and data
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";
import CheckoutForm from "../src/components/CheckoutForm";

// Metadata for the page
export const metadata = {
  title: {
    default: "Checkout",
  },
  description: "Complete your purchase by filling out the checkout form.",
};

const Checkout = () => {
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
  const shipping = 5; // Example flat rate shipping
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
                  {CartData.map((item, index) => (
                    <div key={index} className="order-item my-4">
                      <Link href={`/product/${item.id}`}>
                        <div className="item-details">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ maxWidth: "40%" }}
                            className="item-image"
                          />
                          <div>
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-totals mt-4">
                  <div className="subtotal">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="total fw-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
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
