"use client"

import "../../../i18n";
import React from "react";
import Main from "./_home-sections/_main/Main";
import Mission from "./_home-sections/mission/Mission";
import Abwab from "./_home-sections/seven-abwab/Abwab";
import MoreAbwab from "./_home-sections/more-abwab/MoreAbwab";
import MonthlyStocks from "./_home-sections/stocks/MonthlyStocks";
import CallToAction from "./_home-sections/call-to-action/CallToAction";



export default function Home() {

    return<React.Fragment>

        <section className='flex flex-col gap-20'>

            <Main />

            <Mission />

            <Abwab />

            <MonthlyStocks />

            <MoreAbwab />

            <CallToAction />

        </section>

    </React.Fragment>

}