import React, { useEffect, useRef, useState } from 'react';
import { Week } from '../../types/timelineTypes';
import { CSSTransition } from 'react-transition-group';
import PopUpWindow from '../PopUpWindow';

import classes from './TimeCell.module.scss';

interface Props extends Week {
    timeout: number;
}

const TimeCell: React.FC<Props> = ({ begin, end, timeout }) => {
    const [displayCell, setDisplayCell] = useState(false);
    const [displayDate, setDisplayDate] = useState(false);
    const cellRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => setDisplayCell(true), timeout);
    });

    return (
        <CSSTransition
            in={displayCell}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            onEntered={() => {
                if (cellRef.current !== null) {
                    cellRef.current.addEventListener('mouseenter', () =>
                        setDisplayDate(true),
                    );

                    cellRef.current.addEventListener('mouseleave', () =>
                        setDisplayDate(false),
                    );
                }
            }}
            classNames={{
                enter: classes.cellEnter,
                enterActive: classes.cellEnterActive,
            }}
        >
            <div className={classes.timecellBlock} ref={cellRef}>
                <CSSTransition
                    in={displayDate}
                    timeout={100}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enter: classes.dateEnter,
                        enterActive: classes.dateEnterActive,
                        exit: classes.dateExit,
                        exitActive: classes.dateExitActive,
                    }}
                >
                    <PopUpWindow
                        messages={[`${begin} - ${end}`]}
                        position='right'
                        textAlign='center'
                    />
                </CSSTransition>
            </div>
        </CSSTransition>
    );
};

export default TimeCell;
