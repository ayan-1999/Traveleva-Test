import "./body.css";
import Card from "../card/Card";
import { useEffect, useState } from "react";

const TabsWrap = ({ tabs, notificationCount, taskCount, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, [initialActiveTab]);

  const getCount = (tabName) => {
    switch (tabName) {
      case "Tasks":
        return taskCount;
      case "Notifications":
        return notificationCount;
      default:
        return 0;
    }
  };
  return (
    <div className="navigation">
      <ul>
        {tabs?.map((currentTab, i) => {
          return (
            <li key={i}>
              <div
                className={`navigationTab ${activeTab === currentTab ? "active" : ""}`}
              >
                <div
                  className="tab"
                  onClick={() => {
                    setActiveTab(currentTab);
                  }}
                >
                  {currentTab}
                </div>
                <span className="notificationValue">
                  {getCount(currentTab)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Body = ({ appData }) => {
  return (
    <div className="container">
      <TabsWrap
        tabs={appData?.tabs}
        tasks={appData?.tasks}
        notificationCount={appData?.notifications?.count}
        taskCount={appData?.taskCount}
        initialActiveTab={appData?.activeTab}
        appData={appData}
      />
      <div className="content">
        {appData.tasks?.map((val, i) => {
          return (
            <Card
              key={i}
              title={val?.title}
              startDate={val?.startDate}
              endDate={val?.endDate}
              lastUpdated={val?.lastUpdated}
              status={val?.status}
              teamMembers={val?.teamMembers}
              icons={val?.icons}
              progress={val?.progress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
