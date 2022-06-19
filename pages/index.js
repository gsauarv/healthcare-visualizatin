import BoxContainer from "../components/BoxContainer";
import InputComponent from "../components/InputComponent";

export default function Home() {
  return (
    <>
      <BoxContainer>
        {/* flex div  */}
        <div className="flex flex-col  h-[100vh] md:flex-row">
          {/* project title */}
          <div className="bg-red-500 md:w-[50%]">
            <h1 className="text-[24px] font-bold text-white">Welcome To</h1>
            <h1 className="text-[24px] font-bold text-white">
              Healthcare Visualization
            </h1>
          </div>
          {/* login component */}
          <div className="border-2 border-red-300  rounded-md p-2 md:w-[50%] md:h-fit md:m-auto md:ml-5 ">
            <form>
              <InputComponent inputLabel={"Username"} />
              <InputComponent inputLabel={"Email"} inputType={"email"} />
              <InputComponent inputLabel={"Password"} inputType={"password"} />
              <button className="bg-red-500 px-5 py-2 uppercase text-sm font-bold text-white mt-5 rounded-md hover:bg-red-400">
                Login
              </button>
            </form>
            <h3 className="mt-5 text-sm uppercase font-bold text-red-600">
              Are you a new user?
            </h3>
            <a className="hover:cursor-pointer self-start">
              <h3 className="text-sm underline text-red-600 hover:text-red-400">
                Sign Up
              </h3>
            </a>
          </div>
        </div>
      </BoxContainer>
    </>
  );
}
