import "./card.css";
import { CgCalendarTwo } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { companyImgsUrl, userImgsUrl } from "../../constants/constants";

const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="outer">
        <div className="inner" style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};
const Completed = () => {
  return (
    <>
      <div className="complete">
        <h3> Completed ✓</h3>
      </div>
    </>
  );
};

const Card = ({
  title,
  startDate,
  endDate,
  lastUpdated,
  status,
  teamMembers,
  icons,
  progress,
}) => {
  return (
    <>
      <div className="card">
        <div className="cardContainer">
          <div className="cardIcons">
            {icons.map((val, i) => {
              return (
                <div className="logoContainer" key={i}>
                  <img
                    src={companyImgsUrl[val] || companyImgsUrl.default}
                    alt="logo"
                  />
                </div>
              );
            })}
          </div>
          {status === "in-progress" ? (
            <div className="middlesection">
              <div className="cardTitle">
                <h3>{title}</h3>
              </div>

              <div className="cardDuration">
                <div className="dates">
                  <CgCalendarTwo />

                  <span>
                    Start: <b>{startDate}</b>
                  </span>
                </div>
                <span className="dot">∙</span>
                <div className="dates">
                  <TbTargetArrow />

                  <span>
                    End: <b>{endDate}</b>
                  </span>
                </div>
              </div>

              <div className="workProgress">
                {status === "in-progress" && (
                  <ProgressBar progress={progress} />
                )}
              </div>
            </div>
          ) : (
            <div className="middlesection">
              <div className="cardTitle">
                <h3>{title}</h3>
              </div>
            </div>
          )}

          <div className="lastSection">
            <div className="lastUpdated">
              <h3>Last updated:</h3>
              <span> {lastUpdated}</span>
            </div>
            <div className="teamMembers">
              <div className="avatarImages">
                {teamMembers.slice(0, 2).map((val, i) => {
                  return (
                    <div className="avatar" key={i}>
                      <img
                        src={userImgsUrl[val] || userImgsUrl.default}
                        alt="logo"
                      />
                    </div>
                  );
                })}
                {teamMembers.length > 3 && (
                  <div className="avatar">
                    <span className="teamImageGreaterThanThree">
                      {teamMembers.length - 2 > 9
                        ? "+9"
                        : teamMembers.length - 2}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {status !== "in-progress" && <Completed />}
        </div>
      </div>
    </>
  );
};
export default Card;
