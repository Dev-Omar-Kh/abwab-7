import MainTitle from '@/components/texts/MainTitle'
import React from 'react'

export default function MonthlyStocks() {

    return <React.Fragment>

        <section className='pattern-bg w-full'>

            <div className='w-full py-10 common-px !space-y-10 bg-greenColor/75'>

                <div className='m-auto w-fit'>
                    <MainTitle title='الأسهم الشهرية' textColor='var(--whiteColor)' lineColor='var(--whiteColor)' />
                </div>

                <div></div>

            </div>

        </section>

    </React.Fragment>

}
