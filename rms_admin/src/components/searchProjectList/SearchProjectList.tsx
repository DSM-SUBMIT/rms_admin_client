import React, { FC, useEffect } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ListItem from './listItem';
import useSearchProject from '../../util/hooks/searchProject/useSearchProject'
import { ProjectsType } from '../../constance/viewProject';
import Pagination from '../pagination/Pagination';

interface Props {
    page: number;
    projects: Array<ProjectsType>;
    totalPage: number;
    total_amount: number;
    query: string;
    setPage: (payload: number) => void;
    setPlanList: (payload: string) => void;
}

const SearchProjectList: FC<Props> = props => {
    const { page, projects, totalPage, query, setPage } = props;
    const childProps = {
        page,
        totalPage,
        setPage
    };
    const { setState, state  } = useSearchProject();
    // const onSubmitSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setState.getSearching(e.target.value)
    // }

    return (
        <>
            <Header/>
            <S.Main>
                <S.Center>
                    <S.SearchArea>
                        <form>
                            <h3>"{query}"에 대한 검색결과 입니다.</h3>
                            <input
                                type="search" name="search"
                                placeholder="보고서를 입력하세요"
                                
                            />
                        </form>
                    </S.SearchArea>
                    <S.SearchList>
                        {projects.map((v: ProjectsType, i: number) : any => {
                                return <ListItem {...v} key={i} />;
                            })}
                        {/* <S.SearchResult>검색결과가 없습니다<br/>검색어를 다시 입력해주세요!</S.SearchResult> */}
                    </S.SearchList>
                    <Pagination {...childProps}/>
                </S.Center>
            </S.Main>
        </>
    );
};

export default SearchProjectList;