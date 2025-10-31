"use client"

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {

    return <React.Fragment>

        <Header />

        <main className='min-h-screen'>{children}</main>

        <Footer />

    </React.Fragment>

}
