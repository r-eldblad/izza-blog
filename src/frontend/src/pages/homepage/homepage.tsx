import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import ProfileDescription from "../../components/profile-description/profile-description";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="mainArea">
      <main>
        <ProfileDescription />
        <Header />
      </main>
      <Posts />
    </div>
  );
};

export default HomePage;
