/**
 * @file src\App.tsx
 * @description This is the main Application file that
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 02/11/2024
 * @license MIT
 * @version 1.0.0
 */
import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import formatDate from "./utils/nowDateString";
import AddEmployeeForm from "./components/features/v2/AddEmployeeForm";
import logo from "@/assets/images/tipsync2-logo-64px.png";

type Application = React.FC;

const App: Application = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const now = new Date();
  const [date, setDate] = React.useState<string>(formatDate(now));

  React.useEffect(() => {
    if (!loading) {
      const getVersion = async () => {
        setLoading(true);
        setLoading(false);
      };

      getVersion();
    }
  }, [loading]);

  if (loading) return <LoadingScreen />;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(formatDate(e.currentTarget.value));
  };

  return (
    <React.Fragment>
      <header>
        <img src={logo} alt="SyncTip Logo" />
      </header>
      <main>
        <section>
          <article>
            <div>
              <h3>אנשי צוות</h3>
            </div>
            <div>
              <h4>7</h4>
              <span>👥</span>
            </div>
          </article>
          <article>
            <div>
              <h3>סה"כ שעות</h3>
            </div>
            <div>
              <h4>12:35</h4>
              <span>🕗</span>
            </div>
          </article>
          <article>
            <div>
              <h3>שכר שעתי</h3>
            </div>
            <div>
              <h4>65.44</h4>
              <span>💵</span>
            </div>
          </article>
        </section>
        <section className="column">
          <div>
            <h3>בחירת תאריך</h3>
          </div>
          <article className="date-picker">
            <div>
              <input value={date} type="date" onChange={handleDateChange} />
              <span className="text">
                {new Date(date).toLocaleDateString("he-IL", {
                  weekday: "long",
                })}
              </span>
            </div>
          </article>
          <div>
            <h3>סך טיפים</h3>
          </div>
          <article className="date-picker">
            <div>
              <input type="number" placeholder="0" />
            </div>
          </article>
          <div>
            <h3>הוסף איש צוות</h3>
          </div>
          <AddEmployeeForm />
        </section>
        <a href="https://wa.me/1234567890?text=Check%20out%20this%20image%20%20%3Cimage%3E%20https%3A%2F%2Fexample.com%2Fimage.jpg">
          send
        </a>
        {/* <TipsForm /> */}
      </main>
    </React.Fragment>
  );
};

export default App;
