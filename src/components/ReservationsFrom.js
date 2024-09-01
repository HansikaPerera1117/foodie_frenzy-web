"use client";
import { useCallback, useEffect, useState } from "react";
import DatePicker from "sassy-datepicker";
import TimePicker from "@ashwinthomas/react-time-picker-dropdown";
import { getAllBranches } from "../service/branchService";
import { customToastMsg, handleError, validateInputs } from "../util/CommonFun";
import { placeReservation } from "../service/reservationService";
import { makeAdvancePayment } from "../service/paymentService";
import CardDetailsForm from "./CardDetailsForm";

const today = new Date();

const ReservationsFrom = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: today,
    time: "",
    person: "",
    branchId: "",
  });
  const { name, email, phone, date, time, person, branchId } = formData;
  const [paymentId, setPaymentId] = useState("");
  const [reservationData, setReservationData] = useState({});
  const [isShowPaymentForm, setIsShowPaymentForm] = useState(false);

  // Date Picker
  const [visible, setVisible] = useState(false);

  const [branchList, setBranchList] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});

  useEffect(() => {
    loadAllBranches();
    setCustomerDetails(
      localStorage.getItem("CUSTOMER")
        ? JSON.parse(localStorage.getItem("CUSTOMER"))
        : {}
    );
  }, []);

  const loadAllBranches = () => {
    // popUploader(dispatch, true);
    setBranchList([]);
    let temp = [];
    getAllBranches()
      .then((res) => {
        res?.data?.records.map((branch) => {
          temp.push({
            id: branch?.id,
            name: branch?.name,
          });
        });

        setBranchList(temp);
        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };

  const handleDateSelect = useCallback((newDate) => {
    setVisible(false);
    setFormData({ ...formData, date: newDate });
  }, []);

  const togglePicker = () => setVisible((v) => !v);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkLoginCustomer = () => {
    if (localStorage.getItem("CUSTOMER")) {
      handleSubmitReservation();
    } else {
      customToastMsg("You have to login before make a reservation");
    }
  };

  const handleSubmitReservation = () => {
    let isValidated = false;
    if (formData.name === "") {
      customToastMsg("Name cannot be empty");
    } else if (
      !validateInputs(formData.email, ["isEmpty", "isEmail"]).isValid
    ) {
      customToastMsg("Enter valid email");
    } else if (formData.phone === "") {
      customToastMsg("Contact no cannot be empty");
    } else if (formData.date === "") {
      customToastMsg("Select reservation date");
    } else if (formData.time === "") {
      customToastMsg("Select reservation time");
    } else if (formData.person === "") {
      customToastMsg("Add person count");
    } else if (formData.branchId === "") {
      customToastMsg("Select branch");
    } else {
      isValidated = true;
    }
    if (isValidated) {
      const data = {
        userId: customerDetails?.id,
        name: formData.name,
        branchId: formData.branchId,
        email: formData.email,
        personCount: parseFloat(formData.person),
        contactNo: formData.phone,
        date: formData.date,
        time: formData.time,
      };

      console.log(data);

      setReservationData(data);
      setIsShowPaymentForm(true);
    }
  };

  const handlePaymentSuccess = async (paymentId) => {
    const updatedReservationData = {
      ...reservationData,
      paymentId: paymentId,
    };

    // popUploader(dispatch, true);
    await placeReservation(updatedReservationData)
      .then((response) => {
        // popUploader(dispatch, false);
        customToastMsg("Reservation placed successfully", 1);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: today,
          time: "",
          person: "",
          branchId: "",
        });
        localStorage.removeItem("CART_LIST");
      })
      .catch((error) => {
        // popUploader(dispatch, false);
        handleError(error);
      })
      .finally(() => {
        setIsShowPaymentForm(false);
      });
  };

  return (
    <>
      {isShowPaymentForm ? (
        <CardDetailsForm
          getPaymentId={async (paymentId) => {
            if (paymentId) {
              setPaymentId(paymentId);
              await handlePaymentSuccess(paymentId);
            } else {
              setIsShowPaymentForm(false);
            }
          }}
        />
      ) : (
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
                    error ? (!name ? "invalid" : "") : ""
                  }`}
                  placeholder="Name"
                  name="name"
                  onChange={(e) => onChange(e)}
                  value={name}
                  required=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group">
                <label>
                  <i className="far fa-envelope" />
                </label>
                <input
                  type="email"
                  className={`form_control ${
                    error ? (!email ? "invalid" : "") : ""
                  }`}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => onChange(e)}
                  value={email}
                  required=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form_group">
                <label>
                  <i className="far fa-phone" />
                </label>
                <input
                  type="number"
                  className={`form_control ${
                    error ? (!phone ? "invalid" : "") : ""
                  }`}
                  placeholder="Contact No"
                  name="phone"
                  onChange={(e) => onChange(e)}
                  value={phone}
                  required=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group">
                <label onClick={togglePicker}>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className={`form_control ${
                    error ? (!date ? "invalid" : "") : ""
                  }`}
                  id="datepicker"
                  placeholder="Reserved Date"
                  name="date"
                  required=""
                  onClick={togglePicker}
                  value={`${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`}
                />
                <div className="date-picker">
                  {visible ? (
                    <DatePicker
                      value={date}
                      onChange={handleDateSelect}
                      minDate={today}
                      weekStartsFrom="Monday"
                      className="absolute mt-2"
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group">
                <label htmlFor="select">
                  <i className="far fa-clock"></i>
                </label>
                <select
                  className={`form_control ${
                    error ? (!time ? "invalid" : "") : ""
                  }`}
                  id="select"
                  name="time"
                  onChange={(e) => onChange(e)}
                  value={time}
                >
                  <option data-display="Reservation Time">
                    Reservation Time
                  </option>
                  <option value={"09.00"}>9.00 Am</option>
                  <option value={"09.30"}>9.30 Am</option>
                  <option value={"10.00"}>10.00 Am</option>
                  <option value={"10.30"}>10.30 Am</option>
                  <option value={"11.00"}>11.00 Am</option>
                  <option value={"11.30"}>11.30 Am</option>
                  <option value={"12.00"}>12.00 Pm</option>
                  <option value={"12.30"}>12.30 Pm</option>
                  <option value={"13.00"}>01.00 Pm</option>
                  <option value={"13.30"}>01.30 Pm</option>
                  <option value={"14.00"}>02.00 Pm</option>
                  <option value={"14.30"}>02.30 Pm</option>
                  <option value={"15.00"}>03.00 Pm</option>
                  <option value={"15.30"}>03.30 Pm</option>
                  <option value={"16.00"}>04.00 Pm</option>
                  <option value={"16.30"}>04.30 Pm</option>
                  <option value={"17.00"}>05.00 Pm</option>
                  <option value={"17.30"}>05.30 Pm</option>
                  <option value={"18.00"}>06.00 Pm</option>
                  <option value={"18.30"}>06.30 Pm</option>
                  <option value={"19.00"}>07.00 Pm</option>
                  <option value={"19.30"}>07.30 Pm</option>
                  <option value={"20.00"}>08.00 Pm</option>
                  <option value={"20.30"}>08.30 Pm</option>
                  <option value={"21.00"}>09.00 Pm</option>
                  <option value={"21.30"}>09.30 Pm</option>
                  <option value={"22.00"}>10.00 Pm</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group">
                <label>
                  <i className="far fa-user" />
                </label>
                <input
                  type="number"
                  className={`form_control ${
                    error ? (!person ? "invalid" : "") : ""
                  }`}
                  placeholder="Person Count"
                  name="person"
                  min={1}
                  max={8}
                  onChange={(e) => onChange(e)}
                  value={person}
                  required=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_group">
                <label htmlFor="select">
                  <i className="far fa-home"></i>
                </label>
                <select
                  className={`form_control ${
                    error ? (!branchId ? "invalid" : "") : ""
                  }`}
                  id="select"
                  name="branchId"
                  onChange={(e) => onChange(e)}
                  value={branchId}
                >
                  <option data-display="Select Branch">Select Branch</option>
                  {branchList.map((branch) => {
                    return <option value={branch?.id}>{branch?.name}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="form_group">
                <button
                  type="button"
                  className="main-btn btn-red"
                  onClick={() => {
                    checkLoginCustomer();
                  }}
                >
                  book a table <i className="far fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
export default ReservationsFrom;
