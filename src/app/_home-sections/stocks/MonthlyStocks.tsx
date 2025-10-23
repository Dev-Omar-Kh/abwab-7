import MainTitle from '@/components/texts/MainTitle'
import React from 'react'
import { useTranslation } from 'react-i18next'
import StockCard from '@/components/cards/StockCard';

const shares = [

    { id: 1, price: 300, currency: "stocks.egp", stockColor: '#C0C0C0' },
    { id: 2, price: 500, currency: "stocks.egp", stockColor: '#FFD700' },
    { id: 3, price: 700, currency: "stocks.egp", stockColor: '#E5E4E2' },
    { id: 4, price: 1000, currency: "stocks.egp", stockColor: '#B9F2FF' },

    { id: 5, price: 50, currency: "stocks.usd", stockColor: '#50C878' },
    { id: 6, price: 100, currency: "stocks.usd", stockColor: '#0F52BA' },
    { id: 7, price: 200, currency: "stocks.usd", stockColor: '#7851A9' },

];

export default function MonthlyStocks() {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='pattern-bg w-full'>

            <div className='w-full py-10 common-px !space-y-10 bg-greenColor/75'>

                <div className='m-auto w-fit !mb-20'>
                    <MainTitle title={t('stocks.title')} textColor='var(--whiteColor)' lineColor='var(--whiteColor)' miniBottom={false}  />
                </div>

                {/* <div className='grid grid-cols-4 gap-5 max-[1030px]:grid-cols-3 max-[800px]:grid-cols-2 max-[510px]:grid-cols-1'> */}
                <div className='flex flex-wrap items-center justify-center gap-5'>

                    {shares.map(stock => <StockCard 
                        key={stock.id} price={stock.price} 
                        currency={stock.currency}stockColor={stock.stockColor}
                        className='stock-card-width' 
                    />)}

                </div>

            </div>

        </section>

    </React.Fragment>

}
