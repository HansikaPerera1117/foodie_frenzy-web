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
    if (localStorage.getItem("isLogin")) {
      handlePlaceOrder();
    } else {
      customToastMsg("You have to login before place order");
    }
  };

  const handlePlaceOrder = () => {
    let isValidated = false;

    if (formData.firstName === "") {
      customToastMsg("First Name cannot be empty");
    } else if (formData.lastName === "") {
      customToastMsg("Last Name cannot be empty");
    } else if (formData.address === "") {
      customToastMsg("Address cannot be empty");
    } else if (formData.contactNumber === "") {
      customToastMsg("Contact no cannot be empty");
    } else if (
      !validateInputs(formData.email, ["isEmpty", "isEmail"]).isValid
    ) {
      customToastMsg("Enter valid email");
    } else if (formData.paymentMethod === "") {
      customToastMsg("Select payment method");
    } else {
      isValidated = true;
    }
    if (isValidated) {
      const data = {
        cusId: customerDetails?.id,
        name: formData.firstName + " " + formData.lastName,
        address: formData.address,
        email: formData.email,
        contactNo: formData.contactNumber,
        orderNote: formData.orderNotes,
        paymentMethod: formData.paymentMethod,
        orderItems: orderProductsList,
      };

      console.log(data);

      setOrderData(data);
      setIsShowPaymentForm(true);
    }
  };

  const handlePaymentSuccess = async (paymentId) => {
    const updatedOrderData = {
      ...orderData,
      paymentId: paymentId,
    };

    // popUploader(dispatch, true);
    await placeOrder(updatedOrderData)
      .then((response) => {
        // popUploader(dispatch, false);
        customToastMsg("Order placed successfully", 1);
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
        customSweetAlert(
          "Thanks for shop with us, your order placed successfully.",
          1,
          () => {
            window.location.href = "/";
          }
        );
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
              await handlePaymentSuccess(paymentId);
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
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={onChange}
                  value={firstName}
                  required
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
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={onChange}
                  value={lastName}
                  required
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
                  type="number"
                  className={`form_control2 ${
                    error ? (!contactNumber ? "invalid" : "") : ""
                  }`}
                  placeholder="Enter your contact number"
                  name="contactNumber"
                  onChange={onChange}
                  value={contactNumber}
                  required
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
                  placeholder="Enter your email"
                  name="email"
                  onChange={onChange}
                  value={email}
                  required
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
                    //checkLoginCustomer();
                    handlePlaceOrder();
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
