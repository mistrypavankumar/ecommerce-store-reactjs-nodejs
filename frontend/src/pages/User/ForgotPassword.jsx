import React, { useState, useEffect } from "react";
import { MdMailOutline } from "react-icons/md";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";
import Loader from "../../components/layout/Loader/Loader";
import MetaData from "../../components/layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";

const ForgotPassword = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);

    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [error, alert, message, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen px-8 py-24 bg-slate-200 md:px-24">
          <MetaData title={`Forgot Password`} />
          <div className="bg-white shadow-lg w-full md:w-1/2 lg:w-1/3 h-[70vh] rounded-lg  mx-auto py-5 overflow-hidden">
            <h1 className="text-center text-xl text-slate-600 py-3 border-b-2 border-secondaryDark w-fit mx-auto">
              Forgot Password{" "}
            </h1>
            <form
              className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
              onSubmit={forgotPasswordSubmit}
            >
              <div className="w-full mb-2">
                <div className="flex gap-5 justify-evenly flex-col h-full ">
                  <InputField
                    inputType="text"
                    name="email"
                    placeholder="Enter your email"
                    Icon={MdMailOutline}
                    value={email}
                    setOnChangeValue={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <Button label="Send" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
