import React, {FC} from 'react';
import * as S from '../style'

const Category: FC = () => {
    return (

        <S.CategoryArea>
        <h3>분야 선택</h3>
        <S.Category>
            <div>
                <input type="checkbox" id="web"/>
                <label htmlFor="web">웹</label>
            </div>
            <div>
                <input type="checkbox" id="app"/>
                <label htmlFor="app">앱</label>
            </div>
            <div>
                <input type="checkbox" id="game"/>
                <label htmlFor="game">게임</label>
            </div>
            <div>
                <input type="checkbox" id="embedded"/>
                <label htmlFor="embedded">임베디드</label>
            </div>
            <div>
                <input type="checkbox" id="security"/>
                <label htmlFor="security">보안</label>
            </div>
            <div>
                <input type="checkbox" id="ai"/>
                <label htmlFor="ai">인공지능 / 빅데이터</label>
            </div>
        </S.Category>
    </S.CategoryArea>
    );
};

export default Category;