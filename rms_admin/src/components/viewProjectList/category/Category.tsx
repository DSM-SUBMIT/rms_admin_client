import React, {FC, useState} from 'react';
import * as S from '../style'
import { CategoryBox, DataIdType, FieldMapPropsType, CategoryStateType } from '../../../constance/viewProject';

interface Props {
    field: CategoryStateType;
    setField: (payload : CategoryStateType) => void;
}

const Category: FC<Props> = props => {
    const { field, setField } = props;

    const clickBtnHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const dataId = event.currentTarget.dataset.id;
        const clickField = (dataId as unknown) as DataIdType;
        setField({ ...field, [clickField]: !field[clickField] });
      };

    return (
        <S.CategoryArea>
            <h3>분야 선택</h3>
            <S.Category>
                {CategoryBox &&
                    CategoryBox.map((item: FieldMapPropsType, i: number) => {
                        return(
                            <div key={i}>
                                <S.CheckDiv onClick={clickBtnHandler} data-id={item.id} isClick={field[item.id]}></S.CheckDiv>
                                <label htmlFor={item.id}>{item.span}</label>
                            </div>
                        )
                    })
                }
            </S.Category>
        </S.CategoryArea>
    );
};

export default Category;