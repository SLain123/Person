import { SkillList } from '../../types/aboutTypes';

export const getSkillListValue = (
    targetName: string,
    targetValue: number,
    skillData: SkillList[],
) => {
    let pointAccum = 0;
    let action = '';

    const checkedTargetValue = targetValue < 50 ? 50 : targetValue;

    skillData.forEach((data: SkillList) => {
        const { skillName, skillValue } = data;
        if (skillName === targetName) {
            if (checkedTargetValue > skillValue) {
                action = 'minus';
                pointAccum = checkedTargetValue - skillValue;
            } else if (checkedTargetValue < skillValue) {
                action = 'plus';
                pointAccum = skillValue - checkedTargetValue;
            }
        }
    });

    const newList = skillData.map((data: SkillList) => {
        const { skillName, skillValue } = data;

        if (skillName === targetName) {
            return { skillName, skillValue: checkedTargetValue };
        } else {
            if (pointAccum > 0 && action === 'plus') {
                const need = 100 - skillValue;

                if (pointAccum >= need) {
                    pointAccum -= need;

                    return { skillName, skillValue: 100 };
                } else {
                    const result = skillValue + pointAccum;
                    pointAccum = 0;

                    return { skillName, skillValue: result };
                }
            } else if (pointAccum > 0 && action === 'minus') {
                const need = skillValue - 50;

                if (pointAccum >= need) {
                    pointAccum -= need;

                    return { skillName, skillValue: 50 };
                } else {
                    const result = skillValue - pointAccum;
                    pointAccum = 0;

                    return { skillName, skillValue: result };
                }
            }

            return {
                skillName,
                skillValue,
            };
        }
    });

    return newList;
};
