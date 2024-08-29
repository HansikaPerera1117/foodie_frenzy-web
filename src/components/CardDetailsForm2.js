"use client";

import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { useState } from "react";
import { makeAdvancePayment } from "../service/paymentService";
import { customToastMsg, handleError } from "../util/CommonFun";

const CardDetailsForm2 = (getPaymentId) => {
  const [error, setError] = useState(null);

  //card details
  const [cardName, setCardName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [expDate, setExpDate] = useState("");
  const [amount, setAmount] = useState("");

  const makePayment = () => {
    let isValidated = false;
    if (cardName === "") {
      customToastMsg("Card name cannot be empty");
    } else if (cardNo === "") {
      customToastMsg("Card no cannot be empty");
    } else if (cvv === "") {
      customToastMsg("CVV cannot be empty");
    } else if (expDate === "") {
      customToastMsg("Expire date cannot be empty");
    } else if (amount === "") {
      customToastMsg("Add payment amount");
    } else {
      isValidated = true;
    }

    if (isValidated) {
      // popUploader(dispatch, true);

      const data = {
        amount: parseFloat(amount),
        cardDetails: {
          name: cardName,
          cardNo: cardNo,
          cvv: cvv,
          expDate: expDate,
        },
      };

      makeAdvancePayment(data)
        .then((response) => {
          // popUploader(dispatch, false);
          customToastMsg("Payment added successfully", 1);
          getPaymentId(response?.id);
        })
        .catch((error) => {
          // popUploader(dispatch, false);
          handleError(error);
        });
    }
  };

  return (
    <form className="mt-5">
      <div className="row justify-content-start mt-4">
        <div className="col-lg-6">
          <div className="form_group">
            <label className="fw-semibold">Card Name</label>
            <input
              type="text"
              className={`form_control2 ${
                error ? (!cardName ? "invalid" : "") : ""
              }`}
              placeholder="Enter your card name"
              name="cardName"
              onChange={(e) => {
                setCardName(e.target.value);
              }}
              value={cardName}
              required=""
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form_group">
            <label className="fw-semibold">Card Number</label>
            <input
              type="number"
              className={`form_control2 ${
                error ? (!cardNo ? "invalid" : "") : ""
              }`}
              placeholder="Enter your card number"
              name="cardNo"
              onChange={(e) => {
                setCardNo(e.target.value);
              }}
              value={cardNo}
              required=""
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form_group">
            <label className="fw-semibold">CVV</label>
            <input
              type="number"
              className={`form_control2 ${
                error ? (!cvv ? "invalid" : "") : ""
              }`}
              placeholder="Enter card cvv"
              name="cardNo"
              onChange={(e) => {
                setCvv(e.target.value);
              }}
              value={cvv}
              required=""
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form_group">
            <label className="fw-semibold">Expire Date</label>
            <input
              type="month"
              className={`form_control2 ${
                error ? (!expDate ? "invalid" : "") : ""
              }`}
              placeholder="Enter card expire date"
              name="expDate"
              onChange={(e) => {
                setExpDate(e.target.value);
              }}
              value={expDate}
              required=""
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form_group">
            <label className="fw-semibold">Amount</label>
            <input
              type="number"
              className={`form_control2 ${
                error ? (!amount ? "invalid" : "") : ""
              }`}
              placeholder="Enter payment amount"
              name="amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
              required=""
            />
          </div>
        </div>
      </div>

      {/* button */}

      <div className="col-lg- 8 mt-5">
        <div className="form_group">
          <button
            type="button"
            className="main-btn btn-red"
            onClick={() => {
              makePayment();
            }}
          >
            Make Advance Payment <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
      {/* button end */}
    </form>
  );
};
export default CardDetailsForm2;
