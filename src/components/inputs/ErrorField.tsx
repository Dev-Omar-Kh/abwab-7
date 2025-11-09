import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ErrorField({ error }: {error: string}) {

    const { t } = useTranslation();

    return <React.Fragment>

        <div className="mt-3 p-3 bg-redColor/25 border border-redColor rounded-md duration-300">
            <p className="text-sm text-redColor">{t(error)}</p>
        </div>

    </React.Fragment>

}
