import Lottie from "react-lottie";
import Right from "../../assets/lottie/right.json";
import Wrong from "../../assets/lottie/wrong.json";

const LottieResult = ({ text }) => {
  const lottie = text === "right" ? Right : Wrong;

  const defaultOptions = {
    loop: false,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieResult;
