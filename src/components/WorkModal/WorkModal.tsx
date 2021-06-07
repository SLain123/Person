import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    changeId,
    selectProjectId,
} from '../../features/projects/projectsSlice';

import classes from './WorkModal.module.scss';

const WorkModal: React.FC = () => {
    const activeProgectId = useAppSelector(selectProjectId);
    const dispatch = useAppDispatch();

    return <div className={classes.workModal}>123</div>;
};

export default WorkModal;
