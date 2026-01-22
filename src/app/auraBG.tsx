"use client";

import { AuroraBackground } from "@/components/ui/auroraBackground";
import { motion } from "framer-motion";
import React from 'react';
import { Parallax } from "react-scroll-parallax";
export default function auraBG(){

    return(
        <Parallax speed={-10}>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 50 }}
                    whileInView={{ opacity: 2, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                </motion.div>
            </AuroraBackground>
        </Parallax>
    );

}
