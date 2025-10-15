"use client"

import "../../i18n";
import React from "react";
import Header from "@/components/header/Header";
import Main from "./_sections/_main/Main";
import Mission from "./_sections/mission/Mission";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function Home() {

    useScrollTop();

    return<React.Fragment>

        <Header />

        <Main />

        <Mission />

        <br />

        <br />

        <br />

        <br />

        <br />

        <br />

        <br />

        <br />

        <br />

    </React.Fragment>

}