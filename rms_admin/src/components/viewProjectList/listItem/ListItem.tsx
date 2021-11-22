import React, {FC, useState} from 'react';
import useViewProject from '../../../util/hooks/viewProject/useViewProject';
import * as S from '../style';

interface Props {
    id: number;
    project_type: string;
    title: string;
    is_individual: boolean;
    team_name: string;
    fields: Array<string>;
    github_url: string;
    service_url: string;
    docs_url: string;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListItem: FC<Props> = props => {
    const {
        id,
        title,
        is_individual,
        project_type,
        team_name,
        fields,
        github_url,
        service_url,
        docs_url,
        setIsOpenModal
    } = props;

    const {state, setState} = useViewProject();

    const projectClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        setState.setCurrentProjectId(id);
        setState.setCurrentProjectTitle(title);
        setState.setCurrentProjectDocsUrl(docs_url);
        setState.setCurrentProjectGitUrl(github_url);
        setState.setCurrentProjectServiceUrl(service_url);
        setIsOpenModal(true);
    };

    const projectTypeHandler = (type : string) => {
        switch(type) {
            case "CLUB":
                return "동아리 프로젝트";
            case "TEAM":
                return "팀 프로젝트";
            case "PRO1":
                return "프로젝트 실무1";
            case "PRO2":
                return "프로젝트 실무2";
            case "SOFE":
                return "소프트웨어 공학";
            case "PERS":
                return "개인 프로젝트";
        }
    }

    return (
        <S.Item onClick={projectClickHandler} data-id={id}>
            <S.Type>{projectTypeHandler(project_type)}</S.Type>
            <S.Title>{title}</S.Title>
            <S.Team>{team_name}</S.Team>
            <S.TagArea>
                {fields.map((content, i) => {
                    return(
                        <S.Tag key={i}>
                            {content}
                        </S.Tag>
                    );
                })}
            </S.TagArea>
        </S.Item>
    )
}

export default ListItem;