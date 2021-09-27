import React from 'react';
import * as S from './style';
import { profile } from '../../asset'

const Header = () => {
    return (
        <S.Header>
            <S.Center>
                <S.Logo>RMS</S.Logo>
                <S.Nav>
                    <span>계획서</span>
                    <span>보고서</span>
                    <span>승인된 프로젝트</span>
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