"use client"

import "../../i18n";
import React from "react";
import Header from "@/components/header/Header";
import Main from "./_home-sections/_main/Main";
import Mission from "./_home-sections/mission/Mission";
import Abwab from "./_home-sections/seven-abwab/Abwab";
import MonthlyStocks from "./_home-sections/stocks/MonthlyStocks";
// import { useScrollTop } from "@/hooks/useScrollTop";

export default function Home() {

    return<React.Fragment>

        <section className='flex flex-col gap-20'>

            <Header />

            <Main />

            <Mission />

            <Abwab />

            <MonthlyStocks />

        </section>

    </React.Fragment>

}