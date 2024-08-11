import { useState } from "react";

const CheckoutForm = ({ btnLeft }) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    address: "",
    city: "",
    orderNotes: "",
    paymentMethod: "",
  });

  const {
    firstName,
    lastName,
    contactNumber,
    email,
    address,
    city,
    orderNotes,
    paymentMethod,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !contactNumber ||
      !email ||
      !address ||
      !city ||
      !paymentMethod
    ) {
      setError(true);
      clearError();
    } else {
      alert("Successfully Submitted");
      // Handle form submission logic here
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        address: "",
        city: "",
        orderNotes: "",
        paymentMethod: "",
      });
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <form onSubmit={onSubmit}>
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
        <div className="col-lg-12">
          <div className="form_group my-2">
            <label className="fw-semibold">Contact Number</label>
            <input
              type="text"
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
        <div className="col-lg-12">
          <div className="form_group my-2">
            <label className="fw-semibold">City</label>
            <input
              type="text"
              className={`form_control2 ${
                error ? (!city ? "invalid" : "") : ""
              }`}
              placeholder="Enter your city"
              name="city"
              onChange={onChange}
              value={city}
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
                    value="credit"
                    checked={paymentMethod === "credit"}
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
                    value="cash"
                    checked={paymentMethod === "cash"}
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
            <button className="main-btn btn-red">
              Place Order <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
