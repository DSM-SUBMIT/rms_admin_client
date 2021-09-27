import React, {FC} from 'react';
import * as S from '../style';

const ListItem: FC = () => {
    return (
        <S.Item>
            <S.Type>[팀 프로젝트]</S.Type>
            <S.Title>보고서 관리 시스템</S.Title>
            <S.Team>서브밋</S.Team>
            <S.TagArea>
                <S.Tag>보안</S.Tag>
                <S.Tag>인공지능 / 빅데이터</S.Tag>
                <S.Tag>임베디드</S.Tag>
                <S.Tag>게임</S.Tag>
                <S.Tag>웹</S.Tag>
                <S.Tag>앱</S.Tag>
            </S.TagArea>
        </S.Item>
    )
}

export default ListItem;