import React from "react";
import { SectionHeader } from "../../components";
import logo from "../../assets/logo.webp";
import "./order.css";

const Order = () => {
  return (
    <div className="princedlf__order section__margin" data-aos="fade-up">
      <SectionHeader title={"طلب المنتج"} subTitle={"عطرك المفضل بانتظارك"} />
      <div className="princedlf__order-container w-100 d-flex">
        {/* <!-- left side (image) --> */}
        <div className="left-side w-100"></div>

        {/* <!-- right side (form) --> */}
        <div className="right-side w-100 d-grid place-items-center">
          {/* <!-- form title --> */}
          <div className="title d-grid place-items-center gap-1">
            <h3 className="marhey-ff fs-9 text-primary fw-medium text-center text-beige-700">
              اطلب الآن
            </h3>
            <p className="markazi-ff fs-5 fw-medium text-center text-brown">
              لا تفوت فرصة اقتناء أجمل الروائح
            </p>
          </div>
          {/* <!-- form logo --> */}
          <div className="logo w-100 d-flex align-items-center justify-content-center position-relative">
            <img src={logo} alt="" />
          </div>
          <form className="w-100 d-grid gap-2">
            {/* <!-- parfume offer --> */}
            <div className="perfumes-offer d-grid gap-3 primary-ff">
              <label
                className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
                for="offer"
              >
                إختر العرض :
              </label>
              <select name="offer" id="offer">
                <option
                  className="primary-ff fw-medium fs-2 text-primary"
                  value="اختر العرض الخاص بك"
                >
                  اختر العرض الخاص بك
                </option>
                <option
                  className="primary-ff fw-medium fs-2 text-primary"
                  value="2 عطور + 1 عطر هدية  🎁  = 199 درهم "
                >
                  2 عطور + 1 عطر هدية 🎁 = 199 درهم
                </option>
                <option
                  className="primary-ff fw-medium fs-2 text-primary"
                  value="3 عطور + 2 عطور هدية 🎁  = 249 درهم"
                >
                  3 عطور + 2 عطور هدية 🎁 = 249 درهم
                </option>
                <option
                  className="primary-ff fw-medium fs-2 text-primary"
                  value="5 عطور + 2 عطور هدية 🎁  = 349 درهم"
                >
                  5 عطور + 2 عطور هدية 🎁 = 349 درهم
                </option>
              </select>
            </div>
            {/* <!-- perfume name feild --> */}
            <label
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
              for="perfume-name"
            >
              اسم العطر :
            </label>
            <input
              type="text"
              placeholder="أدخل اسم العطر"
              name="perfume-name"
              id="perfume-name"
              required=""
            />
            {/* <!-- user name feild --> */}
            <div className="user-name-phone d-flex gap-5 w-100">
              <div className="name d-grid gap-2 w-100">
                <label
                  className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
                  for="user-name"
                >
                  الاسم الكامل :
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  name="user-name"
                  id="user-name"
                  required=""
                />
              </div>
              {/* <!-- phone number feild --> */}
              <div className="phone-number d-grid gap-2 w-100">
                <label
                  className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
                  for="user-phone"
                >
                  رقم الهاتف :
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم هاتفك"
                  name="user-phone"
                  id="user-phone"
                  required=""
                />
              </div>
            </div>
            {/* <!-- city feild --> */}
            <label
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
              for="user-city"
            >
              المدينة :
            </label>
            <input
              type="text"
              placeholder="أدخل اسم مدينتك"
              name="user-city"
              id="user-city"
              required=""
            />
            {/* <!-- address feild --> */}
            <label
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
              for="user-address"
            >
              العنوان :
            </label>
            <input
              type="text"
              placeholder="أدخل عنوانك"
              name="user-address"
              id="user-address"
              required=""
            />
            {/* <!-- Submite Button --> */}
            <button
              type="submit"
              className="submit-btn w-100 primary-ff fs-2 fw-medium text-primary cursor-pointer"
            >
              أرسل طلبك
            </button>
            {/* <!-- Note --> */}
            <div className="note">
              <p className="text-center markazi-ff fw-medium fs-2 line-h-1-2">
                ملحوظة: مع مراعاة المحافظة على البيئة، نحيط علم زبنائنا الكرام
                أنه بعد تفريغ زجاجات العطر، يرجى إعلامنا ليستلمها المسؤول عن
                التسليم.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
