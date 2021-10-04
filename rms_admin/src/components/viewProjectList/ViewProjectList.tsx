import React, { FC } from 'react';
import Header from '../header/Header'
import Pagination from '../pagination/Pagination';
import { CheckStateType, ProjectsType } from '../../constance/viewProject';
import Category from './category';
import ListItem from './listItem';
import * as S from './style';

interface Props {
    projects: Array<ProjectsType>;
    total_page: number;
    fields: CheckStateType;
    setField: (payload: CheckStateType) => void;
    setPage: (payload: number) => void;
  }

const ViewProjectList : FC<Props> = props => {
    const { projects, fields } = props;

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
                            {projects &&
                                projects.map(data => {
                                    return(
                                        <ListItem
                                            type={data.type}
                                            title={data.title}
                                            team_name={data.team_name}
                                            fields={data.fields}
                                            key={data.id}
                                        />
                                    );
                                })}
                        </S.ProjectList>
                        <Pagination/>
                    </S.ProjectArea>
                </S.Center>
            </S.Main>
        </>
    );
};

export default ViewProjectList;