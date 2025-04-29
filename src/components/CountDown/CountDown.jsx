import { memo } from "react";
import Countdown from "react-countdown";
const CountDown = ({ endDate }) => {
  return (
    <Countdown
      date={endDate}
      renderer={({ days, hours, minutes, seconds }) => {
        const totalHours = days * 24 + hours;
        return (
          <div className="cdown-container">
            <div className="countdown-box">
              <span className="time">{totalHours}</span>
              <p className="label">ساعت</p>
            </div>
            <div className="countdown-box cdown-min">
              <span className="time">{minutes}</span>
              <p className="label">دقیقه</p>
            </div>
            <div className="countdown-box">
              <span className="time">{seconds}</span>
              <p className="label">ثانیه</p>
            </div>
          </div>
        );
      }}
    />
  );
};

export default memo(CountDown);
