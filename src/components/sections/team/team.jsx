"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Committee from "./committee";

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

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
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
    const dayOf = filterByCommittee(team, "Day-Of");

    // main grid grid-cols-1 mx-12 lg:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-4 items-center justify-center ||| pl-[35%] pr-[23%] 2xl:pl-[39%] 2xl:pr-[27%]
    return (
        <div ref={contentRef} id="team" className="hidden lg:flex flex-col justify-center items-center absolute top-[83%] mx-auto w-full h-[8%] float-in-section">
            <Header title="Meet the Team!" />
            <Committee members={admin} title="Admin" />
        </div>
    )
}