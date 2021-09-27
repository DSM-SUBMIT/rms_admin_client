import React, { FC } from 'react';
import Header from '../header/Header'
import Category from './category';
import ListItem from './listItem';
import * as S from './style';

const ViewProjectList:FC = () => {
    return (
        <>
            <Header/>
            <S.Main>
                <S.Center>
                    <Category/>
                    <S.ProjectArea>
                        <S.SearchArea>
                            <form>
                                <h2>승인된 프로젝트</h2>
                                <input type="search" name="search" placeholder="보고서를 입력하세요"/>
                            </form>
                        </S.SearchArea>
                        <S.ProjectList>
                            {Array(5)
                                .fill(0)
                                .map((list, i) => {
                                    return <ListItem key={i} />;
                                })}
                        </S.ProjectList>
                        <S.Footer>
                            <button type="button">⬅</button>
                            <S.Page>1</S.Page>
                            <S.Page>2</S.Page>
                            <S.Page>3</S.Page>
                            <S.Page>4</S.Page>
                            <S.Page>5</S.Page>
                            <button type="button">➡️</button>
                        </S.Footer>
                    </S.ProjectArea>
                </S.Center>
            </S.Main>
        </>
    );
};

export default ViewProjectList;