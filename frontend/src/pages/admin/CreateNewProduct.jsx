import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import Button from "../../components/user/Button";
import MetaData from "../../components/layout/MetaData";
import {
  AccountTree,
  Description,
  Storage,
  Spellcheck,
  AttachMoney,
} from "@material-ui/icons";
import SideBar from "../../components/admin/Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import InputField from "../../components/user/InputField";
import { useNavigate } from "react-router-dom";

const CreateNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, success, loading } = useSelector((state) => state.newProduct);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/dashboard");

      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [alert, dispatch, error, navigate, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", productName);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title={`All Products - Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <p className="upper text-center text-2xl font-bold text-gray-400">
              CREATE PRODUCT
            </p>
          </div>

          <form
            className="w-[90%]  md:w-[50%] mx-auto shadow-lg bg-white p-10 rounded-md"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <div className="w-full mb-2">
              <div className="flex gap-2 justify-evenly flex-col h-full ">
                <InputField
                  inputType="text"
                  name="productName"
                  placeholder="Enter Product Name"
                  Icon={Spellcheck}
                  value={productName}
                  setOnChangeValue={(e) => setProductName(e.target.value)}
                />
                <InputField
                  inputType="number"
                  name="price"
                  placeholder="Enter Product Price"
                  Icon={AttachMoney}
                  value={price}
                  setOnChangeValue={(e) => setPrice(e.target.value)}
                />
                <div className="bg-primaryGreen rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <Description className="text-xl text-white mx-2" />

                  <textarea
                    className="px-3 py-2 outline-none border-2 w-full"
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>
                <div className="bg-primaryGreen rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <AccountTree className="text-xl text-white mx-2" />
                  <select
                    className="px-3 py-2 outline-none border-2 w-full"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Choose Category</option>
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <InputField
                  inputType="number"
                  name="stock"
                  placeholder="Enter Product Stock"
                  Icon={Storage}
                  value={Stock}
                  setOnChangeValue={(e) => setStock(e.target.value)}
                />
                <div className="w-full flex items-center gap-5">
                  <input
                    className="avatarChoose w-full border-2 rounded-lg "
                    type="file"
                    name="avatar"
                    accept="image/*"
                    multiple
                    onChange={createProductImagesChange}
                  />
                </div>
                <div className="w-full flex justify-center items-center my-5 gap-5 overflow-auto ">
                  {imagesPreview.map((image, index) => (
                    <img
                      key={index}
                      className="w-[10vmax] h-[10vmax] tall:w-[5vmax] tall:h-[5vmax]"
                      src={image}
                      alt="Product Preview"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto">
              <Button disabled={loading ? true : false} label="Create" />{" "}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateNewProduct;
