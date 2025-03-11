import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        title="Google Map"
        className="w-full md:w-[500px] h-[200px] md:h-[450px]"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7504959013413!2d103.69257697472457!3d1.3256249986618078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0562db351f75%3A0xe288d66b049c39bf!2sLokyang%20Light%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1741673821725!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
