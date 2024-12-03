import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaFacebook,
    FaDribbble,
    FaPhoneAlt,
    FaTwitter,
  } from "react-icons/fa";
  
  const Contact = () => {
    return (
      <section className="bg-gray-900 text-white py-10 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.475880216453!2d7.531770573528323!3d9.020279189128448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f5e81392cbd%3A0x7f3434fc8ffee12!2sHelmers%20Hotel!5e0!3m2!1sen!2sng!4v1733239305185!5m2!1sen!2sng" 
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
              style={{ border: 0 }}
              className="rounded"
            ></iframe>
          </div>
  
          {/* Contact Info Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg text-gray-300 mb-4">Contact Us</h2>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWhatsapp size={24} />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope size={24} />
                <span>Email</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaTwitter size={24} />
                <span>Twitter</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaFacebook size={24} />
                <span>Facebook</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaDribbble size={24} />
                <span>Dribbble</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt size={24} />
                <span>Phone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  