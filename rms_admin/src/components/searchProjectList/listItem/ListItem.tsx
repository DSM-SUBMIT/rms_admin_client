import React, { FC } from "react";
import useSearchProject from "../../../util/hooks/searchProject/useSearchProject";
import * as S from "../style";

interface Props {
  id: number;
  project_type: string;
  team_name: string;
  title: string;
  fields: Array<string>;
  is_individual: boolean;
  github_url: string;
  service_url: string;
  docs_url: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListItem: FC<Props> = props => {
  const {
    id,
    project_type,
    title,
    team_name, 
    fields, 
    is_individual,
    github_url,
    service_url,
    docs_url,
    setIsOpenModal
  } = props;

  const {state, setState} = useSearchProject();
  
  const projectClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setState.setCurrentProjectId(id);
    setState.setCurrentProjectTitle(title);
    setState.setCurrentProjectDocsUrl(docs_url);
    setState.setCurrentProjectGitUrl(github_url);
    setState.setCurrentProjectServiceUrl(service_url);
    setIsOpenModal(true);
  };
  return (
    <S.Item onClick={projectClickHandler} data-id={id}>
      <S.Type>[{is_individual ? '개인' : '팀'}프로젝트]</S.Type>
      <S.Title>{title}</S.Title>
      <S.Team>{team_name}</S.Team>
      <S.TagArea>
        {fields.map((content: string, i: number) =>{
          return <S.Tag key={i}>{content}</S.Tag>;
        })}
      </S.TagArea>
    </S.Item>
  );
};

export default ListItem;
