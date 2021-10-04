import React, {FC} from 'react';
import * as S from '../style';

interface Props {
    type: string;
    title: string;
    team_name: string;
    fields: Array<string>;
  }

// const TagName = ['보안', '인공지능 / 빅데이터', '임베디드', '게임', '웹', '앱']
  
const ListItem: FC<Props> = ({ title, type, team_name, fields}) => {
    return (
        <S.Item>
            <S.Type>[{title}]</S.Type>
            <S.Title>{type}</S.Title>
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