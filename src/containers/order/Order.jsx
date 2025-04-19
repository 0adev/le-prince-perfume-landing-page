import React, { useState } from "react";
import { SectionHeader } from "../../components";
import CtaButton from "../../components/ctaButton/CtaButton";
import logo from "../../assets/logo.webp";
import "./order.css";

const Order = () => {
  const [formData, setFormData] = useState({
    offer: "اختر العرض الخاص بك",
    perfumeName: "",
    userName: "",
    userPhone: "",
    userCity: "",
    userAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (formData.offer === "اختر العرض الخاص بك")
      newErrors.offer = "يرجى اختيار العرض المناسب";
    if (!formData.perfumeName.trim())
      newErrors.perfumeName = "يرجى إدخال اسم العطر";
    if (!formData.userName.trim())
      newErrors.userName = "يرجى إدخال الاسم الكامل";
    if (!/^\d{10}$/.test(formData.userPhone))
      newErrors.userPhone = "رقم الهاتف غير صالح (10 أرقام)";
    if (!formData.userCity.trim()) newErrors.userCity = "يرجى إدخال المدينة";
    if (!formData.userAddress.trim())
      newErrors.userAddress = "يرجى إدخال العنوان";
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    fetch("https://formsubmit.co/ayoubaguirar101@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        offer: formData.offer,
        perfumeName: formData.perfumeName,
        userName: formData.userName,
        userPhone: formData.userPhone,
        userCity: formData.userCity,
        userAddress: formData.userAddress,
      }),
    })
      .then(res => {
        if (res.ok) {
          alert("✅ تم إرسال طلبك بنجاح!");
          setFormData({
            offer: "اختر العرض الخاص بك",
            perfumeName: "",
            userName: "",
            userPhone: "",
            userCity: "",
            userAddress: "",
          });
        } else {
          alert("❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        }
      })
      .catch(() => alert("❌ لا يمكن إرسال الطلب الآن."));
  };

  return (
    <div
      className="princedlf__order section__margin"
      data-aos="fade-up"
      id="order"
    >
      <CtaButton />
      <SectionHeader title={"طلب المنتج"} subTitle={"عطرك المفضل بانتظارك"} />
      <div className="princedlf__order-container w-100 d-flex">
        <div className="left-side w-100"></div>

        <div className="right-side w-100 d-grid place-items-center">
          <div className="title d-grid place-items-center gap-1">
            <h3 className="marhey-ff fs-9 text-primary fw-medium text-center text-beige-700">
              اطلب الآن
            </h3>
            <p className="markazi-ff fs-5 fw-medium text-center text-brown">
              لا تفوت فرصة اقتناء أجمل الروائح
            </p>
          </div>

          <div className="logo w-100 d-flex align-items-center justify-content-center position-relative">
            <img src={logo} alt="Logo" />
          </div>

          <form className="w-100 d-grid gap-2" onSubmit={handleSubmit}>
            {/* Offer Selection */}
            <div className="perfumes-offer d-grid gap-3 primary-ff">
              <label
                htmlFor="offer"
                className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
              >
                إختر العرض :
              </label>
              <select
                name="offer"
                id="offer"
                value={formData.offer}
                onChange={handleChange}
              >
                <option value="اختر العرض الخاص بك">اختر العرض الخاص بك</option>
                <option value="2 عطور + 1 عطر هدية  🎁  = 199 درهم ">
                  2 عطور + 1 عطر هدية 🎁 = 199 درهم
                </option>
                <option value="3 عطور + 2 عطور هدية 🎁  = 249 درهم">
                  3 عطور + 2 عطور هدية 🎁 = 249 درهم
                </option>
                <option value="5 عطور + 2 عطور هدية 🎁  = 349 درهم">
                  5 عطور + 2 عطور هدية 🎁 = 349 درهم
                </option>
              </select>
              {errors.offer && (
                <small className="text-red fw-medium">{errors.offer}</small>
              )}
            </div>

            {/* Perfume Name */}
            <label
              htmlFor="perfumeName"
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
            >
              اسم العطر :
            </label>
            <input
              type="text"
              name="perfumeName"
              id="perfumeName"
              placeholder="أدخل اسم العطر"
              value={formData.perfumeName}
              onChange={handleChange}
            />
            {errors.perfumeName && (
              <small className="text-red fw-medium">{errors.perfumeName}</small>
            )}

            {/* Name & Phone */}
            <div className="user-name-phone d-flex gap-5 w-100">
              <div className="name d-grid gap-2 w-100">
                <label
                  htmlFor="userName"
                  className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
                >
                  الاسم الكامل :
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.userName}
                  onChange={handleChange}
                />
                {errors.userName && (
                  <small className="text-red fw-medium">
                    {errors.userName}
                  </small>
                )}
              </div>
              <div className="phone-number d-grid gap-2 w-100">
                <label
                  htmlFor="userPhone"
                  className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
                >
                  رقم الهاتف :
                </label>
                <input
                  type="tel"
                  name="userPhone"
                  id="userPhone"
                  placeholder="0612345678"
                  value={formData.userPhone}
                  onChange={handleChange}
                />
                {errors.userPhone && (
                  <small className="text-red fw-medium">
                    {errors.userPhone}
                  </small>
                )}
              </div>
            </div>

            {/* City */}
            <label
              htmlFor="userCity"
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
            >
              المدينة :
            </label>
            <input
              type="text"
              name="userCity"
              id="userCity"
              placeholder="أدخل اسم مدينتك"
              value={formData.userCity}
              onChange={handleChange}
            />
            {errors.userCity && (
              <small className="text-red fw-medium">{errors.userCity}</small>
            )}

            {/* Address */}
            <label
              htmlFor="userAddress"
              className="primary-ff fw-medium fs-2 text-primary cursor-pointer"
            >
              العنوان :
            </label>
            <input
              type="text"
              name="userAddress"
              id="userAddress"
              placeholder="أدخل عنوانك"
              value={formData.userAddress}
              onChange={handleChange}
            />
            {errors.userAddress && (
              <small className="text-red fw-medium">{errors.userAddress}</small>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn w-100 primary-ff fs-2 fw-medium text-primary cursor-pointer"
            >
              أرسل طلبك
            </button>

            {/* Note */}
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
