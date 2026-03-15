import React from 'react';
import classNames from 'classnames';

import Text from '../text/text';

export type TLoadingProps = React.HTMLProps<HTMLDivElement> & {
    is_fullscreen: boolean;
    is_slow_loading: boolean;
    status: string[];
    theme: string;
};

const Loading = ({ className, id, is_fullscreen = true, is_slow_loading, status }: Partial<TLoadingProps>) => {
    return (
        <div
            data-testid='dt_initial_loader'
            className={classNames(
                'initial-loader',
                {
                    'initial-loader--fullscreen': is_fullscreen,
                },
                className
            )}
        >
            <div id={id} className='circular-loader-wrapper'>
                <svg className='pl' viewBox='0 0 240 240'>
                    <circle
                        className='pl__ring pl__ring--a'
                        cx='120'
                        cy='120'
                        r='105'
                        fill='none'
                        strokeWidth='20'
                        strokeDasharray='0 660'
                        strokeDashoffset='-330'
                        strokeLinecap='round'
                    />
                    <circle
                        className='pl__ring pl__ring--b'
                        cx='120'
                        cy='120'
                        r='90'
                        fill='none'
                        strokeWidth='20'
                        strokeDasharray='0 660'
                        strokeDashoffset='-330'
                        strokeLinecap='round'
                    />
                    <circle
                        className='pl__ring pl__ring--c'
                        cx='120'
                        cy='120'
                        r='75'
                        fill='none'
                        strokeWidth='20'
                        strokeDasharray='0 660'
                        strokeDashoffset='-330'
                        strokeLinecap='round'
                    />
                    <circle
                        className='pl__ring pl__ring--d'
                        cx='120'
                        cy='120'
                        r='60'
                        fill='none'
                        strokeWidth='20'
                        strokeDasharray='0 660'
                        strokeDashoffset='-330'
                        strokeLinecap='round'
                    />
                </svg>
            </div>
            {is_slow_loading &&
                status?.map((text, inx) => (
                    <Text as='h3' color='prominent' size='xs' align='center' key={inx}>
                        {text}
                    </Text>
                ))}
        </div>
    );
};

export default Loading;
