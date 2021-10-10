import React, { FC, useState, useMemo, useEffect} from 'react';
import * as S from './style';
import Header from '../header/Header';
import ListItem from './listItem';
import { ProjectType } from '../../constance/serchProject';
import Pagination from '../pagination/Pagination';
import ViewProjectModal from '../modal/viewProjectModal/ViewProjectModal';
import useSearchProject from '../../util/hooks/searchProject/useSearchProject';

interface Props {
    page: number;
    projects: Array<ProjectType>;
    totalPage: number;
    total_amount: number;
    query: string;
    setQuery: (Payload: string) => void;
    setPage: (payload: number) => void;
    setCurrentProjectId: (payload: number) => void;
}

const SearchProjectList: FC<Props> = props => {
    const { page, projects, totalPage, query, setPage, setQuery, setCurrentProjectId } = props;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const childProps = {
        page,
        totalPage,
        setPage
    };

    const projectViewModal = useMemo(() => {
    if (isOpenModal) return <ViewProjectModal setIsOpenModal={setIsOpenModal}/>
    }, [isOpenModal]);

    const { state, setState } = useSearchProject();

    useEffect(() => {
        switch (state.query) {
            // case setQuery:
            //     return;
            // case null:
            //     return;
        }
    })

    return (
        <>
            {projectViewModal}
            <Header/>
            <S.Main>
                <S.Center>
                    <S.SearchArea>
                        <form>
                            <h3>"{query}"에 대한 검색결과 입니다.</h3>
                            <input
                                type="search" name="search"
                                placeholder="보고서를 입력하세요"
                                onChange={(event) => {
                                setQuery(event.target.value);
                                }}
                                value={query}
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
                                setCurrentProjectId={setCurrentProjectId}
                                setIsOpenModal={setIsOpenModal}
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