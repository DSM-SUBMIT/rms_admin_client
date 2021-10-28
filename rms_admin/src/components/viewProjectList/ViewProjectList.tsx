import React, { FC, useMemo, useState } from 'react';
import Header from '../header/Header'
import Pagination from '../pagination/Pagination';
import { CategoryStateType, ProjectsType } from '../../constance/viewProject';
import Category from './category';
import ListItem from './listItem';
import * as S from './style';
import ViewProjectModal from '../modal/viewProjectModal/ViewProjectModal'
import { useHistory } from 'react-router';
import useSearchProject from '../../util/hooks/searchProject/useSearchProject';

interface Props {
    page: number;
    projects: Array<ProjectsType>;
    totalPage: number;
    field: CategoryStateType;
    setField: (payload: CategoryStateType) => void;
    setPage: (payload: number) => void;
  }

const ViewProjectList : FC<Props> = props => {
    const history = useHistory();
    const { page, projects, totalPage, field, setField, setPage } = props;
    const {state, setState} = useSearchProject();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const childProps = {
        page,
        totalPage,
        setPage
    }

const searching = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`project-list/search/${state.query}`);
    }

    const projectViewModal = useMemo(() => {
        if (isOpenModal) return <ViewProjectModal setIsOpenModal={setIsOpenModal} />;
      }, [isOpenModal]);
    
    return (
        <>
            {projectViewModal}
            <Header/>
            <S.Main>
                <S.Center>
                    <Category field={field} setField={setField}/>
                    <S.ProjectArea>
                        <S.SearchArea>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                history.push(`project-list/search/${state.query}`)
                            }}>
                                <h2>승인된 프로젝트</h2>
                                <input
                                    type="search"
                                    name="search"
                                    placeholder="보고서를 입력하세요"
                                    onChange={(e) => {
                                        setState.setQuery(e.target.value)
                                    }}
                                  value={state.query}
                                />
                            </form>
                        </S.SearchArea>
                        <S.ProjectList>
                            {projects &&
                                projects.map(data => {
                                    return(
                                        <ListItem
                                            id={data.id}
                                            project_type={data.project_type}
                                            title={data.title}
                                            team_name={data.team_name}
                                            fields={data.fields}
                                            key={data.id}
                                            setIsOpenModal={setIsOpenModal}
                                        />
                                    );
                                })}
                        </S.ProjectList>
                        <Pagination {...childProps}/>
                    </S.ProjectArea>
                </S.Center>
            </S.Main>
        </>
    );
};

export default ViewProjectList;