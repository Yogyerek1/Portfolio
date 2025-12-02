export default function Contact() {
    return (
        <div className="pt-5 pb-10 flex flex-col items-center">
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] mb-3">
                Contact With Me
            </h1>
            
            <p className="text-center text-gray-400 text-sm md:text-base mb-6 max-w-xl px-4">
                After submitting your message, we'll continue the conversation via email.
            </p>
            
            <div className="flex justify-center my-6 w-full">
                <hr className="w-3/12 border-t-2 border-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            </div>

            <div className="w-full max-w-2xl px-6">
                <form className="bg-gray-800 p-8 rounded-lg border-4 border-blue-500 hover:shadow-[0_0_30px_rgba(96,165,250,0.7)] transition-all duration-300">
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-blue-400 font-semibold mb-2 drop-shadow-[0_0_5px_rgba(96,165,250,0.6)]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 bg-gray-900 text-gray-300 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-blue-400 font-semibold mb-2 drop-shadow-[0_0_5px_rgba(96,165,250,0.6)]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 bg-gray-900 text-gray-300 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-blue-400 font-semibold mb-2 drop-shadow-[0_0_5px_rgba(96,165,250,0.6)]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="w-full px-4 py-3 bg-gray-900 text-gray-300 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300 resize-none"
                            placeholder="Your message..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}