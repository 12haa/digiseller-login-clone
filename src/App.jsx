import LoginForm from "./components/LoginForm.jsx";


const App = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-2">
            <div className=" flex flex-col items-center justify-center mx-auto  border-gray-200  w-full h-full ">
                <div className="flex max-w-[900px] md:w-[95%] lg:mx-20 lg:w-[80%] border border-gray-100 rounded-lg h-[50%]">
                    <LoginForm/>
                </div>
            <div className="w-full   flex items-center justify-between mt-2">
                <div className="flex items-center justify-center w-[100%] ">
                    <h2 className="text-[#016f59] text-[13px] font-semibold hover:bg-[#ebf6f4] p-2 rounded-lg">تماس با پشتیبانی</h2>
                    <span className="text-[#e0e0e2] text-[35px] mb-1 font-extralight ">|</span>
                    <h2 className="text-[#016f59] font-semibold text-[13px] hover:bg-[#ebf6f4] p-2 rounded-lg">راهنمای ثبت نام</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default App;