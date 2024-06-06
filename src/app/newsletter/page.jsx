"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Newsletter() {
    const [isSubscribed, setSubscribed] = useState(false);

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
                    action="https://script.google.com/macros/s/AKfycbzk_zhV20emSKvJATmefAuA7ykpxhzvKzF02KlmSuG1Q0yYKu-KaLEp-hFcaeNEz8KP/exec"
                    onSubmit={(e) => {
                        e.preventDefault();
                        document.getElementById('submit-newsletter').innerHTML = 'Subscribing...';
                        setTimeout(() => {
                            const form = document.getElementById('newsletter-form');
                            const data = new FormData(form);
                            const action = e.target.action;
                            setSubscribed(true);
                            document.getElementById('submit-newsletter').innerHTML = 'Subscribed!';
                            document.getElementById('submit-newsletter').style.backgroundColor = '#E5E5E5';
                            try {
                                fetch(action, {
                                    method: 'POST',
                                    body: data,
                                })
                            }
                            catch (error) {
                                console.error("Couldn't submit feedback form", error);
                            }
                        }, 1000);
                    }}
                >
                    <input
                        aria-label="Input to enter first name"
                        type="text"
                        name="First Name"
                        placeholder="First Name"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                    />
                    <input
                        aria-label="Input to enter last name"
                        type="text"
                        name="Last Name"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                    />
                    <input
                        aria-label="Input to enter email"
                        type="email"
                        name="Email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 text-sm md:text-base lg:text-lg rounded-md shadow-md"
                        disabled={isSubscribed}
                    />
                    <button
                        id="submit-newsletter"
                        aria-label="Button to submit email"
                        type="submit"
                        className="bg-green-600 text-[#FAFAFA] text-sm md:text-base lg:text-lg px-6 py-2 rounded-md shadow-md hover:bg-green-700 duration-300 ease-in-out"
                        disabled={isSubscribed}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}