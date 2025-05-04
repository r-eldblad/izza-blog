import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import './homepage.css'

const HomePage = () => {
    return (
        <div className="mainArea">
            <main>
                <Header />
                <Posts />
            </main>
        </div>
    );
};

export default HomePage;