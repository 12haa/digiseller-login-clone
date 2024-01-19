import {useState} from "react";

const LoginForm = () => {
    const [mobile, setMobile] = useState("");

    return (
        <div className="flex gap-10 flex-row-reverse items-center justify-center mx-auto   w-full  ">

            <div className="flex flex-col justify-center w-full  gap-10  h-full p-4  ">


                <div className="flex flex-col gap-4 items-end     w-full  ">
                    <div className="flex flex-col justify-center mb-[26px]
              ">ورود یا ثبت نام
                    </div>
                    <h4 className="text-[13px]">! سلام</h4>
                    <h4 className="text-[13px]">برای فروش در دیجی‌کالا آماده‌اید؟
                    </h4>
                    <h4 className="text-[13px]"> :شماره موبایل یا ایمیل خود را وارد کنید</h4>

                </div>
                <div className="flex flex-col gap-4 items-end   w-full  ">

                    <h2 className="text-[13px] text-gray-600">شماره موبایل یا ایمیل</h2>
                    <input type="text" className="border border-gray-400 rounded-lg w-full h-[50px]"></input>
                </div>

            </div>
            <div className="flex flex-col w-full h-full items-center justify-center gap-8">
                <img src="/src/assets/asset1.png" alt="digilogo"/>
                <img src="/src/assets/asset2.png" alt="" className="w-[200px]"/>
            </div>

        </div>
    )
}

export default LoginForm;