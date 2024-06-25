import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setErrorMessage('Email is required.');
    } else if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
      setIsSuccess(true);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-400 bg-cover bg-center"
      style={{
        backgroundImage: "url('C:\Users\DELL\Desktop\newsletter\newsletter\public\images.png')"
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg text-center">
        {!isSuccess ? (
          <div className="content">
            <h1 className="text-2xl font-bold mb-4">Stay Updated!</h1>
            <p className="mb-4">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="text-left list-disc list-inside mb-4">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <label htmlFor="email" className="font-bold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full mb-4"
                required
              />
              {errorMessage && (
                <span className="text-red-500 mb-4">{errorMessage}</span>
              )}
              <button
                type="submit"
                className="bg-gray-700 text-white p-3 rounded hover:bg-gray-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        ) : (
          <p className="text-2xl text-green-600 font-bold">
            Thank you for signing up, {email}!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
