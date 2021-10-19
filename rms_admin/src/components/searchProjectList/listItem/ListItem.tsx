import React, { FC } from "react";
import * as S from "../style";

interface Props {
  id: number;
  project_type: string;
  team_name: string;
  title: string;
  fields: Array<string>;
  is_individual: boolean;
}

const ListItem: FC<Props> = props => {
  const { id, project_type, title, team_name, fields, is_individual } = props;
  
  const projectClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    
  };
  return (
    <S.Item onClick={projectClickHandler}>
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
