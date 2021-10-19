import React, { FC, useState, useMemo, useEffect} from 'react';
import * as S from './style';
import Header from '../header/Header';
import ListItem from './listItem';
import { ProjectType } from '../../constance/serchProject';
import Pagination from '../pagination/Pagination';
import ViewProjectModal from '../modal/viewProjectModal/ViewProjectModal';
import useSearchProject from '../../util/hooks/searchProject/useSearchProject';
import { useHistory } from 'react-router';

interface Props {
    page: number;
    projects: Array<ProjectType>;
    totalPage: number;
    totalAmount: number;
    query: string;
    setQuery: (payload: string) => void;
    getSearchProject: () => void;
    setPage: (payload: number) => void;
}

const SearchProjectList: FC<Props> = props => {
    const history = useHistory();
    const { page, projects, totalPage, query, setPage, setQuery } = props;
    const {state, setState } = useSearchProject();
    const [searchResult, setSearchResult] = useState<boolean>(false);
    // const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const childProps = {
        page,
        totalPage,
        setPage
    };

    // const projectViewModal = useMemo(() => {
    // if (isOpenModal) return <ViewProjectModal setIsOpenModal={setIsOpenModal}/>
    // }, [isOpenModal]);

    const searching = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("search");
        
    }

    return (
        <>
            {/* {projectViewModal} */}
            <Header/>
            <S.Main>
                <S.Center>
                    <S.SearchArea>
                        <form onSubmit={searching}>
                            <h3>"{setState.setQuery}"에 대한 검색결과 입니다.</h3>
                            <input
                                type="search" name="search"
                                placeholder="보고서를 입력하세요"
                                onChange={(event) => {
                                    setState.setQuery(event.target.value);
                                }}
                                value={state.query}
                            />
                        </form>
                    </S.SearchArea>
                    <S.SearchList>
                        {projects.map((data: ProjectType) : any => {
                            return (
                                <ListItem 
                                id={data.id}
                                title={data.title}
                                project_type={data.project_type}
                                team_name={data.team_name}
                                fields={data.fields}
                                is_individual={data.is_individual}
                                key={data.id}
                                />
                            );
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