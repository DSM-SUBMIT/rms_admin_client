import React from 'react';
import * as S from './style';
import { profile } from '../../asset'
import { useModal } from '../../util/hooks/modal';

const Header = () => {
    const {setState} = useModal();

    const onClickChangePasswordModal = () => {
        setState.setModalOn('changePassword');
    }

    return (
        <S.Header>
            <S.Center>
                <S.Logo>RMS</S.Logo>
                <S.Nav>
                    <span>계획서</span>
                    <span>보고서</span>
                    <span>승인된 프로젝트</span>
                    <S.Profile onClick={onClickChangePasswordModal}>
                        <img src={profile} alt="profile"/>
                        <span>비밀번호 변경</span>
                    </S.Profile>
                </S.Nav>
            </S.Center>
        </S.Header>
    );
};

export default Header;