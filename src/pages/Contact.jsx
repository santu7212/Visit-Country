 import React from "react";

const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="bg-[#0B1120] text-white pt-20 pb-12">
      {/* Container same as Hero / Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div
          className="max-w-3xl mx-auto p-10 rounded-2xl flex flex-col gap-6 border-2 border-transparent"
          style={{
            background:
              "linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box",
          }}
        >
          <h2 className="text-3xl font-semibold text-center">Contact Us</h2>

          <form action={handleFormSubmit} className="grid grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="flex flex-col gap-1 col-span-1">
              <label className="text-xs font-semibold text-gray-400">Name</label>
              <input
                type="text"
                name="username"
                required
                placeholder="Enter Your Name"
                className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-400 outline-none focus:border-[#e81cff]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 col-span-1">
              <label className="text-xs font-semibold text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-400 outline-none focus:border-[#e81cff]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-xs font-semibold text-gray-400">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Leave a message"
                className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-400 outline-none resize-none focus:border-[#e81cff]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-3 bg-neutral-800 border border-gray-700 rounded-md text-gray-400 font-semibold cursor-pointer hover:bg-white hover:text-black hover:border-white active:scale-95 transition-all col-span-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
