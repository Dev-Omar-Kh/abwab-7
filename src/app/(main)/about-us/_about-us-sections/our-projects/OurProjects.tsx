import React from 'react';
import MainTitle from '@/components/texts/MainTitle';
import CollectionCard from '@/components/cards/CollectionCard';

import masharee3Insania from '@/assets/images/masharee3-insania.jpg';
import daaoa from '@/assets/images/more-daaoa.jpg';
import masharee3 from '@/assets/images/more-masharee3.jpg';

const collectionData = [

    {
        id: 1,
        image:masharee3Insania,
        title: 'aboutUs.projects.collections.coll1.title',
        list: [
            'aboutUs.projects.collections.coll1.list1',
            'aboutUs.projects.collections.coll1.list2',
            'aboutUs.projects.collections.coll1.list3'
        ],
    },

    {
        id: 2,
        image:daaoa,
        title: 'aboutUs.projects.collections.coll2.title',
        list: [
            'aboutUs.projects.collections.coll2.list1',
            'aboutUs.projects.collections.coll2.list2',
            'aboutUs.projects.collections.coll2.list3',
            'aboutUs.projects.collections.coll2.list4',
            'aboutUs.projects.collections.coll2.list5',
        ],
    },

    {
        id: 3,
        image:masharee3,
        title: 'aboutUs.projects.collections.coll3.title',
        list: [
            'aboutUs.projects.collections.coll3.list1',
            'aboutUs.projects.collections.coll3.list2',
            'aboutUs.projects.collections.coll3.list3'
        ],
    },

];

export default function OurProjects() {

    return <React.Fragment>

        <section className='shapedividers_com-393 shapedividers_com-1399 light-bg-pattern'>
            <div className='py-20 common-px space-y-10 bg-lightColor/75'>


                <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-15'>
                    <MainTitle title='aboutUs.projects.title' miniBottom={false} />
                    {/* <MainSubTitle subTitle="mission.slogan" /> */}
                </div>

                <div className='grid grid-cols-3 gap-5 max-[910px]:grid-cols-2 max-[620px]:grid-cols-1'>

                    {collectionData.map(coll => <CollectionCard 
                        key={coll.id} image={coll.image} 
                        title={coll.title} list={coll.list}
                        className='max-[910px]:[&:nth-child(2)]:order-3 max-[910px]:[&:nth-child(2)]:col-span-2 max-[620px]:[&:nth-child(2)]:col-span-1'
                    />)}

                </div>

            </div>
        </section>

    </React.Fragment>

}
