import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About TechNest</h1>
      
      <section className="company-info">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, TechNest has grown from a small laptop repair shop to one of the leading 
          laptop and accessories retailers in the region. Our mission is to provide high-quality 
          tech products at affordable prices with exceptional customer service.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Founders</h2>
        
        <div className="founder-card">
          <h3>Don Pablo</h3>
          <p className="title">CEO & Co-Founder</p>
          <p>
            With over 15 years in the tech industry, Pablo brings a wealth of knowledge about hardware 
            and customer needs. He oversees company strategy and product selection.
          </p>
        </div>

        <div className="founder-card">
          <h3>Creme Dela Creme</h3>
          <p className="title">CTO & Co-Founder</p>
          <p>
            Cremes is our tech guru with a background in computer engineering. He ensures all products 
            meet our strict quality standards and manages our technical operations.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@technest.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567 (24/7 Support)</p>
        <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94025</p>
        
        <div className="emergency-contact">
          <h3>Emergency Contact</h3>
          <p>
            For urgent order issues outside business hours, please call our emergency line at 
            +1 (555) 987-6543 or email emergency@technest.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;