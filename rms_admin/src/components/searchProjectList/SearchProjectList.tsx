import React, { FC } from 'react';
import * as S from './style';
import Header from '../header/Header';

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
                        <S.Item>
                            <S.Type>[팀 프로젝트]</S.Type>
                            <S.Title>보고서 관리 시스템</S.Title>
                            <S.Team>서브밋</S.Team>
                            <S.TagArea>
                                <S.Tag>보안</S.Tag>
                                <S.Tag>인공지능 / 빅데이터</S.Tag>
                                <S.Tag>임베디드</S.Tag>
                                <S.Tag>게임</S.Tag>
                                <S.Tag>웹</S.Tag>
                                <S.Tag>앱</S.Tag>
                            </S.TagArea>
                        </S.Item>
                        <S.Item>
                            <S.Type>[팀 프로젝트]</S.Type>
                            <S.Title>보고서 관리 시스템</S.Title>
                            <S.Team>서브밋</S.Team>
                            <S.TagArea>
                                <S.Tag>보안</S.Tag>
                                <S.Tag>인공지능 / 빅데이터</S.Tag>
                                <S.Tag>임베디드</S.Tag>
                                <S.Tag>게임</S.Tag>
                                <S.Tag>웹</S.Tag>
                                <S.Tag>앱</S.Tag>
                            </S.TagArea>
                        </S.Item>
                        {/* <S.SearchResult>검색결과가 없습니다<br/>검색어를 다시 입력해주세요!</S.SearchResult> */}
                    </S.SearchList>
                </S.Center>
            </S.Main>
        </>
    );
};

export default SearchProjectList;