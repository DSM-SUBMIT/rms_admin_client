import React, {FC, useState} from 'react';
import * as S from '../style'
import { CategoryBox, DataIdType, FieldMapPropsType, CheckStateType } from '../../../constance/category';

interface Props {
    field: CheckStateType;
    setField: (payload : CheckStateType) => void;
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
                CategoryBox.map((props: FieldMapPropsType) => {
                    return(
                        <div>
                            <input onClick={clickBtnHandler} type="checkbox" id={props.id}/>
                            <label htmlFor={props.id}>{props.span}</label>
                        </div>
                    )
                })
            }
        </S.Category>
    </S.CategoryArea>
    );
};

export default Category;