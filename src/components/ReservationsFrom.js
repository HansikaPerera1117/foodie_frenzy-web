import { useCallback, useState } from "react";
import DatePicker from "sassy-datepicker";

const today = new Date();

const ReservationsFrom = ({ btnLeft }) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    person: "",
    phone: "",
    date: today,
    time: "",
    message: "",
  });
  const { person, phone, date, time, message } = formData;

  // Date Picker
  const [visible, setVisible] = useState(false);
  const handleDateSelect = useCallback((newDate) => {
    setVisible(false);
    setFormData({ ...formData, date: newDate });
  }, []);
  const togglePicker = () => setVisible((v) => !v);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      person.length === 0 ||
      phone.length === 0 ||
      message.length === 0 ||
      time.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      alert("Successfully Data Submitted");
      setFormData({
        person: "",
        phone: "",
        date: today,
        time: "",
        message: "",
      });
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="reservation-form">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form_group">
            <label>
              <i className="far fa-user" />
            </label>
            <input
              type="text"
              className={`form_control ${
                error ? (!person ? "invalid" : "") : ""
              }`}
              placeholder="Person"
              name="person"
              onChange={(e) => onChange(e)}
              value={person}
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
              type="text"
              className={`form_control ${
                error ? (!phone ? "invalid" : "") : ""
              }`}
              placeholder="Phone No"
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
              <option data-display="Reservation Time">Reservation Time</option>
              <option value={1}>9.00 Am</option>
              <option value={1}>9.30 Am</option>
              <option value={1}>10.00 Am</option>
              <option value={1}>10.30 Am</option>
              <option value={1}>11.00 Am</option>
              <option value={1}>11.30 Am</option>
              <option value={1}>12.00 Pm</option>
              <option value={1}>12.30 Pm</option>
              <option value={1}>01.00 Pm</option>
              <option value={1}>01.30 Pm</option>
              <option value={1}>02.00 Pm</option>
              <option value={1}>02.30 Pm</option>
              <option value={1}>03.00 Pm</option>
              <option value={1}>03.30 Pm</option>
              <option value={1}>04.00 Pm</option>
              <option value={1}>04.30 Pm</option>
              <option value={1}>05.00 Pm</option>
              <option value={1}>05.30 Pm</option>
              <option value={1}>06.00 Pm</option>
              <option value={1}>06.30 Pm</option>
              <option value={1}>07.00 Pm</option>
              <option value={1}>07.30 Pm</option>
              <option value={1}>08.00 Pm</option>
              <option value={1}>08.30 Pm</option>
              <option value={1}>09.00 Pm</option>
              <option value={1}>09.30 Pm</option>
              <option value={1}>10.00 Pm</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form_group">
            <label>
              <i className="far fa-edit" />
            </label>
            <textarea
              className={`form_control ${
                error ? (!message ? "invalid" : "") : ""
              }`}
              placeholder="Comments"
              name="message"
              onChange={(e) => onChange(e)}
              value={message}
              defaultValue={""}
            />
          </div>
        </div>
        {/* <div className="col-12">
          {error && <p className="invalid-feedback">all field are required</p>}
        </div> */}
        <div className={`col-lg-${btnLeft ? 12 : 8}`}>
          <div className="form_group">
            <button className="main-btn btn-red">
              book a table <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ReservationsFrom;

const ReservationsFromLg3 = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    person: "",

    date: today,
    time: "",
  });
  const { person, date, time } = formData;

  // Date Picker
  const [visible, setVisible] = useState(false);
  const handleDateSelect = useCallback((newDate) => {
    setVisible(false);
    setFormData({ ...formData, date: newDate });
  }, []);
  const togglePicker = () => setVisible((v) => !v);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (person.length === 0 || time.length === 0) {
      setError(true);
      clearError();
    } else {
      alert("Successfully Data Submitted");
      setFormData({
        person: "",

        date: today,
        time: "",
      });
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="reservation-form">
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div className="form_group">
            <label>
              <i className="far fa-user" />
            </label>
            <input
              type="text"
              className={`form_control ${
                error ? (!person ? "invalid" : "") : ""
              }`}
              placeholder="Person"
              name="person"
              onChange={(e) => onChange(e)}
              value={person}
              required=""
            />
          </div>
        </div>
        <div className="col-lg-3">
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
        <div className="col-lg-3">
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
              <option data-display="Reservation Time">Reservation Time</option>
              <option value={1}>9.00 Am</option>
              <option value={1}>9.30 Am</option>
              <option value={1}>10.00 Am</option>
              <option value={1}>10.30 Am</option>
              <option value={1}>11.00 Am</option>
              <option value={1}>11.30 Am</option>
              <option value={1}>12.00 Pm</option>
              <option value={1}>12.30 Pm</option>
              <option value={1}>01.00 Pm</option>
              <option value={1}>01.30 Pm</option>
              <option value={1}>02.00 Pm</option>
              <option value={1}>02.30 Pm</option>
              <option value={1}>03.00 Pm</option>
              <option value={1}>03.30 Pm</option>
              <option value={1}>04.00 Pm</option>
              <option value={1}>04.30 Pm</option>
              <option value={1}>05.00 Pm</option>
              <option value={1}>05.30 Pm</option>
              <option value={1}>06.00 Pm</option>
              <option value={1}>06.30 Pm</option>
              <option value={1}>07.00 Pm</option>
              <option value={1}>07.30 Pm</option>
              <option value={1}>08.00 Pm</option>
              <option value={1}>08.30 Pm</option>
              <option value={1}>09.00 Pm</option>
              <option value={1}>09.30 Pm</option>
              <option value={1}>10.00 Pm</option>
            </select>
          </div>
        </div>
        {/* <div className="col-12">
         {error && <p className="invalid-feedback">all field are required</p>}
       </div> */}
        <div className={`col-lg-3`}>
          <div className="form_group">
            <button className="main-btn btn-red">
              book a table <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
const ReservationsFromLg12 = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    person: "",

    date: today,
    time: "",
  });
  const { person, date, time } = formData;

  // Date Picker
  const [visible, setVisible] = useState(false);
  const handleDateSelect = useCallback((newDate) => {
    setVisible(false);
    setFormData({ ...formData, date: newDate });
  }, []);
  const togglePicker = () => setVisible((v) => !v);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (person.length === 0 || time.length === 0) {
      setError(true);
      clearError();
    } else {
      alert("Successfully Data Submitted");
      setFormData({
        person: "",

        date: today,
        time: "",
      });
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="reservation-form">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="form_group">
            <label>
              <i className="far fa-user" />
            </label>
            <input
              type="text"
              className={`form_control ${
                error ? (!person ? "invalid" : "") : ""
              }`}
              placeholder="Person"
              name="person"
              onChange={(e) => onChange(e)}
              value={person}
              required=""
            />
          </div>
        </div>
        <div className="col-lg-12">
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
        <div className="col-lg-12">
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
              <option data-display="Reservation Time">Reservation Time</option>
              <option value={1}>9.00 Am</option>
              <option value={1}>9.30 Am</option>
              <option value={1}>10.00 Am</option>
              <option value={1}>10.30 Am</option>
              <option value={1}>11.00 Am</option>
              <option value={1}>11.30 Am</option>
              <option value={1}>12.00 Pm</option>
              <option value={1}>12.30 Pm</option>
              <option value={1}>01.00 Pm</option>
              <option value={1}>01.30 Pm</option>
              <option value={1}>02.00 Pm</option>
              <option value={1}>02.30 Pm</option>
              <option value={1}>03.00 Pm</option>
              <option value={1}>03.30 Pm</option>
              <option value={1}>04.00 Pm</option>
              <option value={1}>04.30 Pm</option>
              <option value={1}>05.00 Pm</option>
              <option value={1}>05.30 Pm</option>
              <option value={1}>06.00 Pm</option>
              <option value={1}>06.30 Pm</option>
              <option value={1}>07.00 Pm</option>
              <option value={1}>07.30 Pm</option>
              <option value={1}>08.00 Pm</option>
              <option value={1}>08.30 Pm</option>
              <option value={1}>09.00 Pm</option>
              <option value={1}>09.30 Pm</option>
              <option value={1}>10.00 Pm</option>
            </select>
          </div>
        </div>
        {/* <div className="col-12">
         {error && <p className="invalid-feedback">all field are required</p>}
       </div> */}
        <div className={`col-lg-12`}>
          <div className="form_group">
            <button className="main-btn btn-red">
              book a table <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { ReservationsFromLg3, ReservationsFromLg12 };
