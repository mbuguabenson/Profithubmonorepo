import './app-logo.scss';

export const AppLogo = () => {
    return (
        <div className='app-header__logo-container'>
            <div className='profithub-logo'>
                <img src='/logo-ph.png' alt='expertstrade' className='brand-logo-img' />
                <span className='profithub-logo__text-profit'>EXPERTS</span>
                <span className='profithub-logo__text-hub'>TRADE</span>
            </div>
        </div>
    );
};
