"use client";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Committee from "./committee";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import '../swiper.css'

export default function Team() {
    const contentRef = useRef(null);

    const [team, setTeam] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data/team.json");
                const data = await res.json();
                setTeam(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();

        const currentContentRef = contentRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('float-in-section-visible');
                }
                else {
                    contentRef.current.classList.remove('float-in-section-visible');
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
        };
    }, []);

    function filterByCommittee(list, committeeName) {
        return list.filter(member => member.committee === committeeName);
    }

    const admin = filterByCommittee(team, "Admin");
    const logistics = filterByCommittee(team, "Logistics and Ops");
    const marketing = filterByCommittee(team, "Marketing");
    const sponsorship = filterByCommittee(team, "Finance and Sponsorships");
    const tech = filterByCommittee(team, "Technology");
    const dayOf = filterByCommittee(team, "Day-of");
    const Judging = filterByCommittee(team, "Judging");

    return (
        <div ref={contentRef} id="team" className="flex flex-col justify-center items-center absolute top-[81.5%] pl-[6%] pr-[3%] pt-2 lg:pt-0 lg:pl-0 lg:pr-0 lg:top-[85.8%] mx-auto w-full h-[17%] lg:h-[13%] float-in-section">
            <Header title="Meet the Team!" />
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                navigation={true}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                className="main w-full lg:mx-10 lg:mt-10 flex items-center justify-center"
            >
                <SwiperSlide>
                    <Committee members={admin} title="Admin" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={logistics} title="Logistics & Ops" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={sponsorship} title="Finance & Sponsorships" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={marketing} title="Marketing" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={tech} title="Technology" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={dayOf} title="Day-Of" />
                </SwiperSlide>

                <SwiperSlide>
                    <Committee members={Judging} title="Judging Support" />
                </SwiperSlide>
            </Swiper>
            <div className="absolute w-[90%] h-full mx-auto flex justify-center items-end mb-[15%] text-sm md:text-base lg:text-lg text-[#FAFAFA]">{currentSlide} / 7 </div>
        </div>
    )
}