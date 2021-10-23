import React, { FC, useState, useMemo, useEffect} from 'react';
import * as S from './style';
import Header from '../header/Header';
import ListItem from './listItem';
import { ProjectType } from '../../constance/serchProject';
import Pagination from '../pagination/Pagination';
import ViewProjectModal from '../modal/viewProjectModal/ViewProjectModal';
import useSearchProject from '../../util/hooks/searchProject/useSearchProject';
import { useHistory, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {GET_SEARCH_PROJECT} from '../../modules/redux/action/searchProject/interface/index';

interface Props {
    page: number;
    projects: Array<ProjectType>;
    totalPage: number;
    totalAmount: number;
    getSearchProject: () => void;
    setPage: (payload: number) => void;
}

type SearchParams = {
    keyword: string;
}

const SearchProjectList: FC<Props> = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { page, projects, totalPage, setPage } = props;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const childProps = {
        page,
        totalPage,
        setPage
    };
    const {state, setState} = useSearchProject();
    const { keyword } = useParams<SearchParams>();

    // const projectViewModal = useMemo(() => {
    // if (isOpenModal) return <ViewProjectModal setIsOpenModal={setIsOpenModal}/>
    // }, [isOpenModal]);

    const searching = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type : GET_SEARCH_PROJECT});
        history.push(`/view/project-list/search/${state.query}`);
    }

    return (
        <>
            {/* {projectViewModal} */}
            <Header/>
            <S.Main>
                <S.Center>
                    <S.SearchArea>
                        <form onSubmit={searching}>
                            <h3>"{keyword}"에 대한 검색결과 입니다.</h3>
                            <input
                                type="search" name="search"
                                placeholder="보고서를 입력하세요"
                                onChange={(e) => {
                                    setState.setQuery(e.target.value);
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
                                    // setIsOpenModal={setIsOpenModal}
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