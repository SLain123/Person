import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeMessageStatus } from '../../features/about/aboutSlice';

import classes from './PopUpWindow.module.scss';

interface Props {
    messages: string[];
    position: 'left' | 'right';
}

const PopUpWindow: React.FC<Props> = ({ messages, position }) => {
    const dispatch = useAppDispatch();
    const messageList = messages.map((message) => {
        return (
            <p key={message} className={classes.popupMessage}>
                {message}
            </p>
        );
    });
    const positionStyle =
        position === 'right' ? classes.popupRight : classes.popupLeft;

    const hidePopup = (evt: MouseEvent) => {
        const target = evt.target as HTMLTextAreaElement;

        if (target.id !== 'skill') {
            dispatch(changeMessageStatus(null));
        }
    };

    useEffect(() => {
        window.addEventListener('click', hidePopup);

        return () => {
            window.removeEventListener('click', hidePopup);
        };
    });

    return (
        <button
            className={[classes.popupWindow, positionStyle].join(' ')}
            aria-label='Close popup window'
            type='button'
        >
            {messageList}
        </button>
    );
};

export default PopUpWindow;
