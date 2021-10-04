import React, { FC } from "react";
import { ProjectsType } from '../../../constance/serchProject'
import * as S from "../style";

const ListItem: FC<ProjectsType> = props => {
  const { type, title, team_name, fields } = props;

  return (
    <S.Item>
      <S.Type>[{type}]</S.Type>
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
