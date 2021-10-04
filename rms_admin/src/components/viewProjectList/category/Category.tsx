import React, {FC, useState} from 'react';
import * as S from '../style'
import { CategoryBox } from '../../../constance/category';

const Category: FC =  () => {
    return (

        <S.CategoryArea>
        <h3>분야 선택</h3>
        <S.Category>
            {
                CategoryBox
                .map((v, i) => {
                    return(
                        <div>
                            <input type="checkbox" id={v.id}/>
                            <label htmlFor={v.id}>{v.span}</label>
                        </div>
                    )
                })
            }
        </S.Category>
    </S.CategoryArea>
    );
};

export default Category;