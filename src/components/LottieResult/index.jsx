import Lottie from "react-lottie";
import Right from "../../assets/lottie/right.json";
import Wrong from "../../assets/lottie/wrong.json";

const LottieResult = ({ styles, text }) => {
  const lottie = text === "Right" ? Right : text === "Wrong" ? Wrong : "";

  const defaultOptions = {
    loop: false,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={styles.height}
      width={styles.width}
    />
  );
};

export default LottieResult;
