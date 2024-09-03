"use client";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./Ui-3d-card";


export function Photos({ img , index }) {
    return (
        <div draggable="true" className="box bg-[#F5DEB3] rounded-xl">
            <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-xl p-2 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={img}
                            height="100"
                            width="100"
                            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl gallery-image"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    );
}