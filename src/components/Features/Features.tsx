import "./Features.css";
function Featrues() {
    return (
        <section className="features">
            <h2 className="features__title">Features</h2>

            <div className="features-grid">
                <div className="feature-card">
                    <h3>Multi-Platform Management</h3>
                    <p>Manage all social accounts from one dashboard.</p>
                </div>
                <div className="feature-card">
                    <h3>Advanced Analytics</h3>
                    <p>Track performance and audience growth.</p>
                </div>

                <div className="feature-card">
                    <h3>AI Content Assistant</h3>
                    <p>Create captions and post ideas instantly.</p>
                </div>

                <div className="feature-card">
                    <h3>Team Collaboration</h3>
                    <p>Work together with your team efficiently.</p>
                </div>

                <div className="feature-card">
                    <h3>Unified Inbox</h3>
                    <p>Manage all conversations from one place.</p>
                </div>
            </div>

        </section>
    );
}
export default Featrues;