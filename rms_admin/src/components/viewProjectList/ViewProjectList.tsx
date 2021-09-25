import React, { FC } from 'react';
import Header from '../header/Header'
import * as S from './style';

const ViewProjectList:FC = () => {
    return (
        <>
            <Header/>
            <S.Main>
                <S.Center>
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
                    <S.ProjectArea>
                        <S.SearchArea>
                            <form>
                                <h2>승인된 프로젝트</h2>
                                <input type="search" name="search" placeholder="보고서를 입력하세요"/>
                            </form>
                        </S.SearchArea>
                        <S.ProjectList>                           
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
                            </S.ProjectList>
                        <S.Footer>
                            <button type="button">⬅</button>
                            <S.Page>1</S.Page>
                            <S.Page>1</S.Page>
                            <S.Page>1</S.Page>
                            <S.Page>1</S.Page>
                            <S.Page>1</S.Page>
                            <button type="button">➡️</button>
                        </S.Footer>
                    </S.ProjectArea>
                </S.Center>
            </S.Main>
        </>
    );
};

export default ViewProjectList;