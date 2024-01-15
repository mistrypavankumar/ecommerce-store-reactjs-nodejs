import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../../components/layout/MetaData";
import {
  PinDrop,
  Home,
  LocationCity,
  Public,
  Phone,
  TransferWithinAStation,
} from "@material-ui/icons";
import { Country, State } from "country-state-city";
import InputField from "../../components/user/InputField";
import Button from "../../components/user/Button";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navgiate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone number should be 10 digits");
      return;
    }

    dispatch(
      saveShippingInfo({
        address,
        city,
        pinCode,
        state,
        country,
        phoneNo,
      })
    );
    navgiate("/order/confirm");
  };
  return (
    <Fragment>
      <div className="h-auto py-24">
        <MetaData title="Shipping Details" />

        <CheckoutSteps activeStep={0} />
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
          <h2 className="text-2xl mb-5 pb-5 border-b-2 border-secondaryDark font-semibold w-fit mx-auto">
            Shipping Details
          </h2>

          <form
            className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div className="w-full mb-5">
              <div className="flex gap-5 justify-evenly flex-col h-full ">
                <InputField
                  inputType="text"
                  name="address"
                  placeholder="Address"
                  Icon={Home}
                  value={address}
                  setOnChangeValue={(e) => setAddress(e.target.value)}
                />

                <InputField
                  inputType="text"
                  name="city"
                  placeholder="City"
                  Icon={LocationCity}
                  value={city}
                  setOnChangeValue={(e) => setCity(e.target.value)}
                />

                <InputField
                  inputType="number"
                  name="pinCode"
                  placeholder="Pin Code"
                  Icon={PinDrop}
                  value={pinCode}
                  setOnChangeValue={(e) => setPinCode(e.target.value)}
                />

                <InputField
                  inputType="number"
                  name="phoneNO"
                  placeholder="Phone Number"
                  Icon={Phone}
                  value={phoneNo}
                  size="10"
                  setOnChangeValue={(e) => setPhoneNo(e.target.value)}
                />

                <div className="bg-primaryGreen rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <Public className="text-xl text-white mx-2" />

                  <select
                    className="px-3 py-2 outline-none border-2 w-full"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Choose Country</option>
                    {Country &&
                      Country.getAllCountries().map((item, index) => {
                        return (
                          <option key={index} value={item.isoCode}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                {country && (
                  <div className="bg-primaryGreen rounded-lg overflow-hidden w-full flex justify-start items-center">
                    <TransferWithinAStation className="text-xl text-white mx-2" />
                    <select
                      className="px-3 py-2 outline-none border-2 w-full"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Choose State</option>
                      {State &&
                        State.getStatesOfCountry(country).map((item, index) => {
                          return (
                            <option key={index} value={item.isoCode}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                )}
              </div>
            </div>

            <Button label="Continue" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
