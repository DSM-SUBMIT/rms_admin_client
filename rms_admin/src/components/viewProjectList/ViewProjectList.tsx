import React, { FC, useMemo, useState } from 'react';
import Header from '../header/Header'
import Pagination from '../pagination/Pagination';
import { CategoryStateType, ProjectsType } from '../../constance/viewProject';
import Category from './category';
import ListItem from './listItem';
import * as S from './style';
import ViewProjectModal from '../modal/viewProjectModal/ViewProjectModal'

interface Props {
    currentPage: number;
    page: number;
    projects: Array<ProjectsType>;
    total_page: number;
    field: CategoryStateType;
    setField: (payload: CategoryStateType) => void;
    setPage: (payload: number) => void;
    setCurrentProjectId: (payload: number) => void;
  }

const ViewProjectList : FC<Props> = props => {
    const { currentPage ,page, projects, total_page, field, setField, setPage, setCurrentProjectId } = props;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const childProps = {
        page,
        total_page,
        setPage
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
                            <form>
                                <h2>승인된 프로젝트</h2>
                                <input type="search" name="search" placeholder="보고서를 입력하세요"/>
                            </form>
                        </S.SearchArea>
                        <S.ProjectList>
                            {projects &&
                                projects.map(data => {
                                    return(
                                        <ListItem
                                            id={data.id}
                                            type={data.type}
                                            title={data.title}
                                            team_name={data.team_name}
                                            fields={data.fields}
                                            key={data.id}
                                            setCurrentProjectId={setCurrentProjectId}
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