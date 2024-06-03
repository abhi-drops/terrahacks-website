"use client";
import { useRef, useEffect, useState } from "react";
import Header from "@/components/header.jsx";
import FAQItem from "./faq-item";
import { IoClose } from "react-icons/io5";
import { useClickAway } from "react-use";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../swiper.css';

export default function FAQ() {
    const contentRef = useRef(null);
    const swiperRef = useRef(null);
    const clickAwayRef = useRef(null);
    const [questions, setQuestions] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [isVisible, setVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useClickAway(clickAwayRef, () => {
        handleCloseModal();
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/faq.json");
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error("Failed to fetch FAQ questions: ", error);
            }
        };
        fetchData();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKeyDown);
            setIsSmallScreen(window.innerWidth < 768);
        }

        const currentContentRef = contentRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('float-in-section-visible');
                } else {
                    contentRef.current.classList.remove('float-in-section-visible');
                }
            },
            {
                threshold: 0.1, // Trigger when 20% of the section is visible
            }
        );

        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            if (expanded) {
                swiperRef.current.autoplay.stop();
            } else {
                swiperRef.current.autoplay.start();
            }
        }
    }, [expanded]);

    const pages = [
        questions.slice(0, 2),
        questions.slice(2, 4),
        questions.slice(4, 6),
        questions.slice(6, 8),
        questions.slice(8, 10)
    ];

    const handleOpenModal = (item) => {
        setModalContent(item);
        setExpanded(true);
        setVisible(true);
        document.body.classList.add("overflow-hidden");
    };

    const handleCloseModal = () => {
        setModalContent(null);
        setExpanded(false);
        setVisible(false);
        document.body.classList.remove("overflow-hidden");
    };

    return (
        <>
            <div id="faq" ref={contentRef} className="flex flex-col justify-center items-center absolute top-[52.8%] lg:top-[55.7%] 2xl:top-[56.2%] pl-[19%] pr-[39%] lg:pl-[17%] lg:pr-[38%] 2xl:pl-[25%] 2xl:pr-[38%] mx-auto w-full h-[12%] lg:h-[10%] float-in-section">
                <Header title="FAQ" />
                <ul className="hidden md:grid text-left grid-cols-1 gap-y-3 lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-3 lg:gap-y-5 2xl:mt-6 text-black font-medium pt-6">
                    {questions.map((item, index) => (
                        <FAQItem item={item} key={index} onOpen={handleOpenModal} isVisible={isVisible} setVisible={setVisible} />
                    ))}
                </ul>
                {isSmallScreen && (
                    <div className="block md:hidden w-full h-[80%]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={500}
                            navigation
                            pagination={{
                                el: '.custom-swiper-pagination',
                                type: 'custom',
                                renderCustom: (swiper, current, total) => {
                                    return `${current} / ${total}`;
                                },
                            }}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            className="md:hidden w-full h-full flex flex-col justify-center items-center"
                        >
                            {pages.map((page, pageIndex) => (
                                <SwiperSlide key={pageIndex}>
                                    <ul className="grid grid-cols-1 h-full gap-y-3 text-black font-medium pt-6">
                                        {page.map((item, index) => (
                                            <FAQItem item={item} key={index} onOpen={handleOpenModal} isVisible={isVisible} setVisible={setVisible} />
                                        ))}
                                    </ul>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-swiper-pagination flex justify-center items-center text-lg text-white"></div>
                    </div>
                )}

            </div>
            {modalContent && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 transition-opacity duration-500 opacity-100">
                    <div ref={clickAwayRef} className="relative flex flex-col items-center justify-center bg-white w-11/12 md:w-1/2 h-3/4 md:h-1/2 rounded-md shadow-md transition-transform transform scale-100">
                        <button
                            aria-label="Close FAQ Modal Button"
                            onClick={handleCloseModal}
                            className="absolute top-0 right-0 w-10 h-auto m-2"
                        >
                            <IoClose className="absolute top-0 right-0 w-10 h-auto m-2" />
                        </button>
                        <p className="lg:pb-10 pb-6 text-center font-medium lg:text-lg mx-[10%]">
                            {modalContent.question}
                        </p>
                        <hr className="w-[90%]" />
                        <p className="lg:text-lg mx-[10%] pt-6 lg:pt-10">
                            {modalContent.answer}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
