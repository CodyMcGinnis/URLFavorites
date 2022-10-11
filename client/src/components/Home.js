import "../App.css";

const Home = () => {

    return (
        <div className="container">
            <h1>About</h1>
            <p>
                This website pulls from a 3rd party API 
                of websites and will return the name of a website, 
                a description. Upon Logging In/Signing Up, a user will be able to “favorite” their chosen 
                website as well as search for websites and favorite them and add 
                it to their favorites table. After doing so, the user will be able 
                to edit and delete their favorites. They can also manually 
                create their favorite websites.
            </p>
        </div>
    );
};

export default Home;