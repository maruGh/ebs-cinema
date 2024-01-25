type buttonDataType = {
  show: boolean;
  onClick: () => void;
};

const Button = ({ show, onClick }: buttonDataType) => {
  return (
    <button
      onClick={() => onClick()}
      className=" bg-slate-700 w-6 h-6 hover:bg-slate-950 active:bg-slate-900 
        rounded-full absolute ml-[78%] max-md:ml-[70%]"
    >
      {show ? "-" : "+"}
    </button>
  );
};

export default Button;
