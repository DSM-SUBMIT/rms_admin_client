import React, {FC} from 'react';
import * as S from '../style';

interface Props {
    id: number;
    project_type: string;
    title: string;
    team_name: string;
    fields: Array<string>;
  }


const ListItem: FC<Props> = props => {
    const {
        id,
        title,
        project_type,
        team_name,
        fields,
        setCurrentProjectId,
        setIsOpenModal
      } = props;

    const projectClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentProjectId(Number(event.currentTarget.dataset.id));
    setIsOpenModal(true)
    };

    return (
        <S.Item onClick={projectClickHandler} data-id={id}>
            <S.Type>{project_type}</S.Type>
            <S.Title>[{title}]</S.Title>
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