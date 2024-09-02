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

const CardDetailsForm = ({ getPaymentId }) => {
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

          const paymentId = response?.data?.id;

          getPaymentId(paymentId);

          setCardName("");
          setCardNo("");
          setCvv("");
          setExpDate("");
          setAmount("");
        })
        .catch((error) => {
          // popUploader(dispatch, false);
          handleError(error);
        });
    }
  };

  return (
    <form className="reservation-form">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form_group">
            <label>
              <i className="far fa-user" />
            </label>
            <input
              type="text"
              className={`form_control ${
                error ? (!cardName ? "invalid" : "") : ""
              }`}
              placeholder="Card Name"
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
            <label>
              <i className="far fa-credit-card" />
            </label>
            <input
              type="number"
              className={`form_control ${
                error ? (!cardNo ? "invalid" : "") : ""
              }`}
              placeholder="Card Number"
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
            <label>
              <i className="far fa-credit-card" />
            </label>
            <input
              type="number"
              className={`form_control ${error ? (!cvv ? "invalid" : "") : ""}`}
              placeholder="CVV"
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
            <input
              type="month"
              className={`form_control ${
                error ? (!expDate ? "invalid" : "") : ""
              }`}
              placeholder="Expire date"
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
            <label>
              <i className="far fa-money-bill" />
              
            </label>
            <input
              type="number"
              className={`form_control ${
                error ? (!amount ? "invalid" : "") : ""
              }`}
              placeholder="Amount"
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

      <div className="col-lg- 8">
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
export default CardDetailsForm;
