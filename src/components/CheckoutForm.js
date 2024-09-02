"use client";
import { useEffect, useState } from "react";
import { placeOrder, placeReservation } from "../service/reservationService";
import {
  customSweetAlert,
  customToastMsg,
  handleError,
  validateInputs,
} from "../util/CommonFun";
import CardDetailsForm2 from "./CardDetailsForm2";

const CheckoutForm = ({ btnLeft }) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    address: "",
    orderNotes: "",
    paymentMethod: "",
  });

  const {
    firstName,
    lastName,
    contactNumber,
    email,
    address,
    orderNotes,
    paymentMethod,
  } = formData;

  const [customerDetails, setCustomerDetails] = useState({});
  const [orderData, setOrderData] = useState({});
  const [isShowPaymentForm, setIsShowPaymentForm] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [orderProductsList, setOrderProductsList] = useState([]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    setCustomerDetails(
      localStorage.getItem("CUSTOMER")
        ? JSON.parse(localStorage.getItem("CUSTOMER"))
        : {}
    );
    setOrderProductsList(
      localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST"))
        : []
    );
  }, []);

  const checkLoginCustomer = () => {
    if (localStorage.getItem("CUSTOMER")) {
      handlePlaceOrder();
    } else {
      customToastMsg("You have to login before place order");
    }
  };

  const handlePlaceOrder = async () => {
    let isValidated = false;

    if (orderProductsList.length === 0) {
      customToastMsg("First add some products to cart");
    } else if (formData.address === "") {
      customToastMsg("Address cannot be empty");
    } else if (formData.paymentMethod === "") {
      customToastMsg("Select payment method");
    } else {
      isValidated = true;
    }
    if (isValidated) {
      const cartDetails = localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST"))
        : [];
      const subTotal = cartDetails.reduce((acc, item) => acc + item.total, 0);
      const total = subTotal + 250;

      const newArray = orderProductsList.map((item) => ({
        id: item.id,
        qty: parseFloat(item.qty),
      }));

      const data = {
        paymentType: formData.paymentMethod,
        subTotal: parseFloat(total),
        description: formData.orderNotes,
        userId: customerDetails?.id,
        orderItems: newArray,
        firstName: customerDetails?.firstName,
        lastName: customerDetails?.lastName,
        contactNo: customerDetails?.customer?.contactNo,
        email: customerDetails?.email,
        addressLine: formData.address,
        orderType: "DELIVERY",
        paymentId: "",
      };

      console.log(data);

      setOrderData(data);

      if (formData.paymentMethod === "CASH_ON_DELIVERY") {
        await handlePaymentSuccess(data);
      } else if (formData.paymentMethod === "ONLINE_PAYMENT") {
        setIsShowPaymentForm(true);
      }
    }
  };

  const setPaymentIdToOrderObject = async (paymentId) => {
    const updatedOrderData = {
      ...orderData,
      paymentId: paymentId,
    };
    await handlePaymentSuccess(updatedOrderData);
  };

  const handlePaymentSuccess = async (orderDetailsObject) => {
    console.log(orderDetailsObject);

    // popUploader(dispatch, true);
    await placeOrder(orderDetailsObject)
      .then((response) => {
        // popUploader(dispatch, false);
        customToastMsg(
          "Thanks for shop with us, your order placed successfully.",
          1
        );
        setFormData({
          firstName: "",
          lastName: "",
          contactNumber: "",
          email: "",
          address: "",
          orderNotes: "",
          paymentMethod: "",
        });
        localStorage.removeItem("CART_LIST");
        window.location.href = "/";
      })
      .catch((error) => {
        // popUploader(dispatch, false);
        handleError(error);
        console.log(error);
      })
      .finally(() => {
        setIsShowPaymentForm(false);
      });
  };

  return (
    <>
      {isShowPaymentForm ? (
        <CardDetailsForm2
          getPaymentId={async (paymentId) => {
            if (paymentId) {
              console.log(paymentId);
              setPaymentId(paymentId);
              await setPaymentIdToOrderObject(paymentId);
            } else {
              setIsShowPaymentForm(false);
            }
          }}
        />
      ) : (
        <form>
          <div className="row justify-content-center me-4">
            <div className="col-lg-6">
              <div className="form_group my-2">
                <label className="fw-semibold">First Name</label>
                <input
                  type="text"
                  className={`form_control2 ${
                    error ? (!firstName ? "invalid" : "") : ""
                  }`}
                  value={
                    Object.keys(customerDetails).length === 0
                      ? "First Name"
                      : customerDetails?.firstName
                  }
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group my-2">
                <label className="fw-semibold">Last Name</label>
                <input
                  type="text"
                  className={`form_control2 ${
                    error ? (!lastName ? "invalid" : "") : ""
                  }`}
                  value={
                    Object.keys(customerDetails).length === 0
                      ? "Last Name"
                      : customerDetails?.lastName
                  }
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group my-2">
                <label className="fw-semibold">Address</label>
                <input
                  type="text"
                  className={`form_control2 ${
                    error ? (!address ? "invalid" : "") : ""
                  }`}
                  placeholder="Enter your address"
                  name="address"
                  onChange={onChange}
                  value={address}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group my-2">
                <label className="fw-semibold">Contact Number</label>
                <input
                  type="text"
                  className={`form_control2 ${
                    error ? (!contactNumber ? "invalid" : "") : ""
                  }`}
                  value={
                    Object.keys(customerDetails).length === 0
                      ? "Contact No"
                      : customerDetails?.customer?.contactNo
                  }
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form_group my-2">
                <label className="fw-semibold">Email</label>
                <input
                  type="email"
                  className={`form_control2 ${
                    error ? (!email ? "invalid" : "") : ""
                  }`}
                  value={
                    Object.keys(customerDetails).length === 0
                      ? "Email"
                      : customerDetails?.email
                  }
                  disabled={true}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form_group my-2">
                <label className="fw-semibold">Order Notes</label>
                <textarea
                  className="form_control2"
                  placeholder="Enter your order notes"
                  name="orderNotes"
                  onChange={onChange}
                  value={orderNotes}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form_group my-2">
                <label className="fw-semibold">Payment Method</label>
                <div className="payment-methods ">
                  <div>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ONLINE_PAYMENT"
                        onChange={onChange}
                      />{" "}
                      Credit Card
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="CASH_ON_DELIVERY"
                        onChange={onChange}
                      />{" "}
                      Cash On Delivery
                    </label>
                  </div>
                </div>
                {error && !paymentMethod && (
                  <p className="invalid-feedback">Payment method is required</p>
                )}
              </div>
            </div>
            <div className={`col-12`}>
              <div className="form_group mt-5">
                <button
                  type="button"
                  className="main-btn btn-red"
                  onClick={() => {
                    checkLoginCustomer();
                  }}
                >
                  Place Order <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;
