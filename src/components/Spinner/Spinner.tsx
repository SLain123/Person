import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className='container'>
            <svg viewBox='0 0 100 100'>
                <defs>
                    <filter id='shadow'>
                        <feDropShadow
                            dx='0'
                            dy='0'
                            stdDeviation='1.5'
                            floodColor='#fc6767'
                        />
                    </filter>
                </defs>
                <circle
                    className='spinner'
                    style={{
                        fill: 'transparent',
                        stroke: '#cc005f',
                        strokeWidth: '4px',
                        strokeLinecap: 'round',
                        filter: 'url(#shadow)',
                    }}
                    cx='50'
                    cy='50'
                    r='45'
                />
            </svg>
        </div>
    );
};

export default Spinner;
