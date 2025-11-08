import SocialCard from '@/components/cards/SocialCard'
import NumbersText from '@/components/texts/NumbersText';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdPhoneEnabled } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

const NumberField = ({number}: {number: string}) => {

    return <React.Fragment>
        <NumbersText lang='ar' number={Number(number)} withSeparator={false} className='text-base' />
    </React.Fragment>

}

const socialData = [

    {id: 2, icon: MdPhoneEnabled, title: 'contactUs.socialLinks.phoneNum', text: <NumberField number={'01112808740'} />, url: 'tel:+201112808740'},
    {id: 3, icon: MdPhoneEnabled, title: 'contactUs.socialLinks.phoneNum', text: <NumberField number={'01005455087'} />, url: 'tel:+201005455087'},
    {id: 1, icon: IoLogoWhatsapp, title: 'contactUs.socialLinks.whatsappNum', text: <NumberField number={'01069418701'} />, url: 'https://api.whatsapp.com/send/?phone=201069418701&text&type=phone_number&app_absent=0'},
    {id: 4, icon: IoLogoWhatsapp, title: 'contactUs.socialLinks.whatsappChannel', text: 'contactUs.socialLinks.projectName', url: 'https://whatsapp.com/channel/0029Va8jmTZ2phHLqRGI2g1k'},
    {id: 5, icon: FaFacebookF, title: 'contactUs.socialLinks.facebook', text: 'contactUs.socialLinks.projectName', url: 'https://www.facebook.com/AbwabSaba/'},
    {id: 6, icon: FaXTwitter, title: 'contactUs.socialLinks.x', text: 'contactUs.socialLinks.projectName', url: 'https://x.com/abwabsab3'},
    {id: 7, icon: FaYoutube, title: 'contactUs.socialLinks.youtube', text: 'contactUs.socialLinks.projectName', url: 'https://www.youtube.com/@BasmtAmal'},
    {id: 8, icon: FaTelegramPlane, title: 'contactUs.socialLinks.telegram', text: 'contactUs.socialLinks.projectName', url: 'https://t.me/abwab777'},
    {id: 9, icon: TbWorld, title: 'contactUs.socialLinks.site', text: 'contactUs.socialLinks.organizationName', url: 'https://basmtamal.com/', className: 'col-span-2 max-[550px]:col-span-1'},

]

export default function SocialLinks({className}: {className?: string}) {

    const { t } = useTranslation();

    return <React.Fragment>

        <div className={`p-5 space-y-5 rounded-xl light-pattern-bg bg-lightColor/75 ${className}`}>

            <h3 className='text-2xl font-semibold text-greenColor max-[550px]:text-xl'>{t('contactUs.socialLinks.title')}</h3>

            <div className='grid grid-cols-2 gap-2.5 max-[550px]:grid-cols-1'>

                {socialData.map(link => <SocialCard 
                    key={link.id} url={link.url}
                    icon={link.icon} title={link.title} text={link.text} 
                    className={link.className ?? ''}
                />)}

            </div>

        </div>

    </React.Fragment>

}
