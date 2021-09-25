import React, { FC } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ListItem from './listItem';

const SearchProjectList: FC = () => {
    return (
        <>
            <Header/>
            <S.Main>
                <S.Center>
                    <S.SearchArea>
                        <form>
                            <h3>"오늘의 저녁은?"에 대한 검색결과 입니다.</h3>
                            <input type="search" name="search" placeholder="보고서를 입력하세요"/>
                        </form>
                    </S.SearchArea>
                    <S.SearchList>
                        {Array(3)
                            .fill(0)
                            .map((list, i) => {
                                return <ListItem key={i} />;
                            })}
                        {/* <S.SearchResult>검색결과가 없습니다<br/>검색어를 다시 입력해주세요!</S.SearchResult> */}
                    </S.SearchList>
                </S.Center>
            </S.Main>
        </>
    );
};

export default SearchProjectList;