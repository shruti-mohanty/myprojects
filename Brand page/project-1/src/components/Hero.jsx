const HeroSection = () => {
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>Unleash the Sound. Elevate Every Beat with Realme Earbuds.</h1>
            <p>Immerse Yourself in Crystal-Clear Sound and Unmatched Comfort—Experience Every Note with Realme Earbuds, Your Perfect Audio Companion.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
                <div className="brand-icons">
                    <img src="/Images/amazon.png" alt="amazon-logo"/>
                    <img src="/Images/flipkart.png" alt="flipkart-logo"/>
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/Images/realme-buds.png" alt="" srcset="" />
        </div>

    </main>
    );
};

export default HeroSection;