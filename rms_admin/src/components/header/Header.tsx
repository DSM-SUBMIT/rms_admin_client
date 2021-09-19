import React from 'react';
import * as S from './style';
import { profile } from '../../asset'

const Header = () => {
    return (
        <S.Header>
            <S.Center>
                <S.Logo>RMS</S.Logo>
                <S.Nav>
                    <S.Plans>계획서</S.Plans>
                    <S.Reports>보고서</S.Reports>
                    <S.Projects>승인된 프로젝트</S.Projects>
                    <S.Profile>
                        <img src={profile} alt="profile"/>
                        <span>조예림</span>
                    </S.Profile>
                </S.Nav>
            </S.Center>
        </S.Header>
    );
};

export default Header;