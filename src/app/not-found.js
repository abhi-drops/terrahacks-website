"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    }, []);

    return (
        <div className="flex justify-center items-center h-screen w-screen text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-black text-white">
            <AiOutlineLoading className="animate-spin w-20 h-20"/>
        </div>
    );
}