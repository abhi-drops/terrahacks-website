"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6Lfj-PIpAAAAAJWws4UUj0fGLNSi8nhmiAlGCE_k"; // Replace with your reCAPTCHA v2 site key

export default function Newsletter() {
    const [isSubscribed, setSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [subscribing, setSubscribing] = useState(false);
    const [dots, setDots] = useState(0);
    const [captchaValue, setCaptchaValue] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev % 3) + 1); // Cycle through 1, 2, 3
        }, 500); // Adjust the speed as needed

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubscribing(true);

        if (!captchaValue) {
            setErrorMessage("Please complete the reCAPTCHA");
            setSubscribing(false);
            return;
        }

        const form = document.getElementById('newsletter-form');
        const data = new FormData(form);
        const formData = Object.fromEntries(data.entries());

        // Append captcha value to formData
        formData["g-recaptcha-response"] = captchaValue;

        const action = "https://script.google.com/macros/s/AKfycbzJZTjAAIyVqS8hz4xjDkf_bsme2En3hf6n5MxPmgwh64kj27Pej93ZEg-h6n-jo6bW/exec";

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: new URLSearchParams(formData),
            });

            const result = await response.json();
            console.log("Server response:", result);

            if (result.result === 'error') {
                const errorMessage = typeof result.error === 'string'
                    ? result.error
                    : stringify(result.error);
                setErrorMessage(`${errorMessage}, please contact us if you have any questions.`);
                setSubscribing(false);
            } else {
                setSubscribed(true);
                setErrorMessage("");
                setSubscribing(false);
                document.getElementById('submit-newsletter').style.backgroundColor = '#E5E5E5';
            }
        } catch (error) {
            console.error("Couldn't submit form", error);
            setErrorMessage("An error occurred. Please try again.");
            setSubscribing(false);
        }
    };

    const onCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <div className="relative bg-newsletter pb-[120%] md:pb-[74%] 2xl:pb-[65%] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center min-h-screen">
            <Link
                aria-label="Link to redirect to home"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
                className="absolute top-[15%] w-[30%] md:w-[20%] lg:w-[15%] 2xl:w-[10%]"
            >
                <Image
                    src="/assets/th-logo.png"
                    alt='TerraHacks Logo'
                    width={750}
                    height={750}
                    priority={true}
                    className='w-full pointer-events-none'
                />
            </Link>
            <h3 className="text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-center text-[#FAFAFA] tracking-wide absolute top-[35%]">TerraHacks Newsletter</h3>
            <div className="flex flex-col items-center justify-center p-5 2xl:p-8 text-sm md:text-base lg:text-lg xl:text-xl absolute top-[45%] w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[40%] space-y-6 rounded-md shadow-md bg-[#FAFAFA]">
                <p className="text-center">Subscribe to our newsletter to receive email updates about TerraHacks!</p>
                <form
                    id="newsletter-form"
                    className="flex flex-col items-center justify-center w-full space-y-5 xl:space-y-8"
                    method="POST"
                    action="#"
                    onSubmit={handleSubmit}
                >
                    <input
                        aria-label="Input to enter first name"
                        type="text"
                        name="First Name"
                        placeholder="First Name"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                        autoComplete="given-name"
                        required
                    />
                    <input
                        aria-label="Input to enter last name"
                        type="text"
                        name="Last Name"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                        autoComplete="family-name"
                        required
                    />
                    <input
                        aria-label="Input to enter email"
                        type="email"
                        name="Email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                        autoComplete="email"
                        required
                    />
                    <ReCAPTCHA
                        sitekey={SITE_KEY}
                        onChange={onCaptchaChange}
                    />
                    <button
                        id="submit-newsletter"
                        aria-label="Button to submit email"
                        type="submit"
                        className="bg-green-600 text-[#FAFAFA] text-sm md:text-base lg:text-lg px-6 py-2 rounded-md shadow-md hover:bg-green-700 duration-300 ease-in-out"
                        disabled={isSubscribed || subscribing}
                    >
                        {isSubscribed ? (
                            'Subscribed'
                        ) : subscribing ? (
                            `Subscribing${'.'.repeat(dots)}`
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                </form>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            </div>
        </div>
    );
}
