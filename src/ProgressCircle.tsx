import { CircularProgressbar } from "react-circular-progressbar";

const ProgressCircle = ({ percent }: any) => {
  const radius = 54;
  const circumference = Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    // <svg className="progress-circle" width="120" height="60">
    //   <circle
    //     className="progress-circle-bg"
    //     cx="60"
    //     cy="60"
    //     r={radius}
    //     fill="none"
    //     stroke="#e9e9e9"
    //     strokeWidth={5}
    //     strokeDasharray={"400"}
    //   />
    //   <circle
    //     className="progress-circle-bar"
    //     cx="60"
    //     cy="60"
    //     r={radius}
    //     stroke="#04fc43"
    //     strokeWidth={5}
    //     fill="none"
    //     strokeDasharray={`${circumference} ${circumference}`}
    //     strokeDashoffset={Math.abs(170 - offset)}
    //     strokeLinecap="butt"
    //   />
    // </svg>
    <></>
  );
};

export default ProgressCircle;
