import "./WhyChooseUs.css";

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="why-header">
                <h2>Why Choose Us?</h2>
                <p>
                    Everything you need to manage, grow and analyze your social media presence from one place.
                </p>
            </div>
            <div className="why-grid">
                <div className="why-card">
                    <h3>Save time</h3>
                    <p>
                        Automate repetitive tasks and manage multiple platforms from a
                        single dashboard.
                    </p>
                </div>
                <div className="why-card">
                    <h3>Increase Engagement</h3>
                    <p>
                        Use analytics and insights to understand your audience better.
                    </p>
                </div>

                <div className="why-card">
                    <h3>Grow Faster</h3>
                    <p>
                        Make data-driven decisions and scale your social presence
                        effectively.
                    </p>
                </div>
            </div>

        </section>
    );
}
export default WhyChooseUs;