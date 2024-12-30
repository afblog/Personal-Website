import React, { useContext, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import ProjectContext from "../../Contexts/ProjectContext";

export default function Contact() {
  const contextData = useContext(ProjectContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const notifySuccess = () => {
    contextData.language === "EN"
      ? toast.success("Your message has been sent successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      : toast.success("پیام شما با موفقیت ارسال شد", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };

  const notifyError = () => {
    contextData.language === "EN"
      ? toast.error("Please enter the requested values ​​correctly", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      : toast.error("لطفا مقادیر خواسته شده را به درستی وارد نمایید", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [textareaInput, setTextAreaInput] = useState("");

  const nameRegex = /^[a-zA-Z]{3,10} [a-zA-Z]{3,10}$/g;
  const nameRegexFA = /^[آ-ی]{3,10} [آ-ی]{3,10}$/g;
  const emailRegex = /^[\w\.\_]+\@gmail\.com$/g;

  const handelNameInput = (event) => {
    if (contextData.language === "EN") {
      const value = event.target.value;
      setName(value);
      setIsNameValid(nameRegex.test(value));
    } else {
      const value = event.target.value;
      setName(value);
      setIsNameValid(nameRegexFA.test(value));
    }
  };

  const nameInputBlur = () => {
    if (!isNameValid) {
      setName("");
      setIsNameValid(true);
    }
  };

  const handelEmailInput = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  const emailInputBlur = () => {
    if (!isEmailValid) {
      setEmail("");
      setIsEmailValid(true);
    }
  };

  useEffect(() => {
    console.log(textareaInput);
  }, [textareaInput]);

  const handelTextAreaInput = (event) => {
    const textAreaValue = event.target.value;
    setTextAreaInput(textAreaValue);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearInput = () => {
    setName("");
    setEmail("");
    setTextAreaInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length && name.length) {
      emailjs.send(
        "service_78cscom",
        "template_b5ub2u5",
        formData,
        "Nfvq8ogw1jW0p-KUe"
      );
      clearInput();
      notifySuccess();
    } else {
      notifyError();
    }
  };

  return (
    <section
      data-aos="fade-up"
      id="contact"
      className={`py-10 md:py-[60px] ${
        contextData.language === "EN" ? "ltr" : "rtl"
      }`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-y-0 lg:gap-x-[80px]">
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              action="#"
              className="flex flex-col child:rounded gap-y-5 w-full"
            >
              <div className="flex flex-col gap-y-3">
                {contextData.language === "EN" ? (
                  <input
                    value={name}
                    name="name"
                    onChange={(event) => {
                      handelNameInput(event);
                      handleChange(event);
                    }}
                    onBlur={nameInputBlur}
                    type="text"
                    placeholder="Your FullName"
                    className={`py-[18px] px-6 outline-none focus:shadow-md ${
                      isNameValid
                        ? "placeholder:text-zinc-500 border-2 border-solid border-black"
                        : "placeholder:text-red-500 border-2 border-solid border-red-500"
                    } hover:bg-zinc-100 rounded placeholder:font-SoraRegular placeholder:text-base/5`}
                  />
                ) : (
                  <input
                    value={name}
                    name="name"
                    onChange={(event) => {
                      handelNameInput(event);
                      handleChange(event);
                    }}
                    onBlur={nameInputBlur}
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className={`py-[18px] placeholder:font-DanaMedium px-6 outline-none focus:shadow-md ${
                      isNameValid
                        ? "placeholder:text-zinc-500 border-2 border-solid border-black"
                        : "placeholder:text-red-500 border-2 border-solid border-red-500"
                    } hover:bg-zinc-100 rounded placeholder:font-DanaRegular placeholder:text-base/5`}
                  />
                )}
                {contextData.language === "EN" ? (
                  <span
                    className={`${
                      isNameValid
                        ? "hidden"
                        : "block text-red-500 font-SoraRegular text-base/5 tracking-tighter"
                    }`}
                  >
                    Please enter your full name, for example: 'Abolfazl Sadeghi'
                  </span>
                ) : (
                  <span
                    className={`${
                      isNameValid
                        ? "hidden"
                        : "block text-red-500 font-DanaRegular text-base/5 tracking-tighter"
                    }`}
                  >
                    لطفا نام و نام خانوادگی خود را به فارسی وارد کنید، به عنوان
                    مثال: 'ابوالفضل صادقی'
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-3">
                {contextData.language === "EN" ? (
                  <input
                    name="email"
                    value={email}
                    onChange={(event) => {
                      handelEmailInput(event);
                      handleChange(event);
                    }}
                    onBlur={emailInputBlur}
                    type="email"
                    placeholder="Email"
                    className={`py-[18px] px-6 outline-none focus:shadow-md ${
                      isEmailValid
                        ? "placeholder:text-zinc-500 border-2 border-solid border-black"
                        : "placeholder:text-red-500 border-2 border-solid border-red-500"
                    } hover:bg-zinc-100 rounded placeholder:font-SoraRegular placeholder:text-base/5`}
                  />
                ) : (
                  <input
                    name="email"
                    value={email}
                    onChange={(event) => {
                      handelEmailInput(event);
                      handleChange(event);
                    }}
                    onBlur={emailInputBlur}
                    type="email"
                    placeholder="ایمیل"
                    className={`py-[18px] ltr px-6 outline-none focus:shadow-md ${
                      isEmailValid
                        ? "placeholder:text-zinc-500 border-2 border-solid border-black"
                        : "placeholder:text-red-500 border-2 border-solid border-red-500"
                    } hover:bg-zinc-100 rounded placeholder:font-DanaRegular placeholder:text-base/5`}
                  />
                )}
                {contextData.language === "EN" ? (
                  <span
                    className={`${
                      isEmailValid
                        ? "hidden"
                        : "block text-red-500 font-SoraRegular text-base/5 tracking-tighter"
                    }`}
                  >
                    Please enter your email correctly
                  </span>
                ) : (
                  <span
                    className={`${
                      isEmailValid
                        ? "hidden"
                        : "block text-red-500 font-DanaRegular text-base/5 tracking-tighter"
                    }`}
                  >
                    لطفا ایمیل خود را به درستی وارد کنید
                  </span>
                )}
              </div>
              {contextData.language === "EN" ? (
                <textarea
                  name="message"
                  placeholder="How can I help?"
                  maxLength={250}
                  value={textareaInput}
                  onChange={(event) => {
                    handelTextAreaInput(event);
                    handleChange(event);
                  }}
                  className="textarea border-2 border-solid border-black h-[140px] py-4 px-6 focus:shadow-md outline-none hover:bg-zinc-100 placeholder:text-zinc-500 placeholder:font-SoraRegular placeholder:text-base/5"
                ></textarea>
              ) : (
                <textarea
                  name="message"
                  placeholder="سوال خود را بپرسید"
                  maxLength={250}
                  value={textareaInput}
                  onChange={(event) => {
                    handelTextAreaInput(event);
                    handleChange(event);
                  }}
                  className="textarea border-2 border-solid border-black h-[140px] py-4 px-6 focus:shadow-md outline-none hover:bg-zinc-100 placeholder:text-zinc-500 placeholder:font-DanaRegular placeholder:text-base/5"
                ></textarea>
              )}
              <div className="flex items-center mt-5 gap-x-6">
                {contextData.language === "EN" ? (
                  <button
                    type="submit"
                    className="text-white py-[14px] md:py-4 font-SoraSemiBold text-base/5 md:text-xl/6 tracking-tighter px-4 md:px-5 bg-black hover:bg-neutral-700 rounded"
                  >
                    Send
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-white py-[14px] md:py-4 font-DanaDemiBold text-base/5 md:text-xl/6 px-4 md:px-5 bg-black hover:bg-neutral-700 rounded"
                  >
                    ارسال
                  </button>
                )}
                <a
                  href="https://t.me/afblogg"
                  target="-blank"
                  className="bg-black hover:bg-neutral-700 p-[14px] md:py-[18px] md:px-[18px] rounded"
                >
                  <svg
                    fill="#fff"
                    width="20px"
                    height="20px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>telegram</title>
                    <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/afblog"
                  target="-blank"
                  className="bg-black hover:bg-neutral-700 p-[14px] md:py-[18px] md:px-[18px] rounded"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </form>
          </div>
          {contextData.language === "EN" ? (
            <div className="md:h-[380px] lg:w-1/2">
              <p className="font-SoraExtraBold text-2xl/[28px] sm:text-5xl/[56px] tracking-tighter mb-3">
                Let’s talk for
              </p>
              <p className="font-SoraExtraBold text-2xl/[28px] sm:text-5xl/[56px] tracking-tighter">
                Something special
              </p>
              <p className="font-SoraRegular text-zinc-500 text-base/5 text-wrap max-w-[608px] mt-5">
                Feel free to contact me if you have any questions or problems
                and I will respond as soon as possible.
              </p>
              <a
                href="mailto:abolfazl.948233@gmail.com"
                className="inline-block font-SoraBold text-wrap sm:font-SoraSemiBold hover:text-zinc-500 text-xl/6 sm:text-[28px]/8 mt-5 sm:mt-10"
              >
                abolfazl.948233@gmail.com
              </a>
            </div>
          ) : (
            <div className="md:h-[380px] lg:w-1/2">
              <p className="font-MorabbaBold text-2xl/[28px] sm:text-5xl/[56px] mb-3">
              در مورد یک چیز خاص
              </p>
              <p className="font-MorabbaBold text-2xl/[28px] sm:text-5xl/[56px]">
              صحبت کنیم
              </p>
              <p className="font-DanaMedium text-zinc-500 text-base/5 text-wrap max-w-[608px] mt-5">
                خوشحال می شوم اگر سوالی یا مشکلی دارید با من تماس بگیرید و من در
                اسرع وقت پاسخ خواهم داد.
              </p>
              <a
                href="mailto:abolfazl.948233@gmail.com"
                className="inline-block font-SoraBold text-wrap sm:font-SoraSemiBold hover:text-zinc-500 text-xl/6 sm:text-[28px]/8 mt-5 sm:mt-10"
              >
                abolfazl.948233@gmail.com
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
