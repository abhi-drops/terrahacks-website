"use client";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Committee from "./committee";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../swiper.css'

export default function Team() {
    const [team, setTeam] = useState([]);
    const contentRef = useRef(null);

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
                threshold: 0.2, // Trigger when 10% of the section is visible
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

    return (
        <div ref={contentRef} id="team" className="flex flex-col justify-center items-center absolute top-[89%] lg:top-[85.8%] mx-auto w-full h-[9%] lg:h-[13%] float-in-section">
            <Header title="Meet the Team!" />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation = {true}
                scrollbar = {{draggable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                className="main w-full mx-10 mt-10 flex items-center justify-center"
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
            </Swiper>
        </div>
    )
}