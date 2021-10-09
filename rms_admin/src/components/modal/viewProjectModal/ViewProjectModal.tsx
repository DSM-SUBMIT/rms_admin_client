import React, { FC } from 'react';
import * as S from '.';
import { git, api, fn, closeModalIcon} from '../../../asset'

interface Props {
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  }

const ViewProjectModal : FC<Props> = props => {
    const { setIsOpenModal } = props;

    const closeBoxClickHandler = () => {
        if (setIsOpenModal !== undefined) setIsOpenModal(false);
    };

    return (
        <S.Main>
            <S.Modal>
                <S.Close onClick={closeBoxClickHandler}>
                    <img src={closeModalIcon} alt="close"/>
                </S.Close>
                <S.ProjectName>오늘 저녁은 뿌링클</S.ProjectName>
                <S.ViewButton>
                    <button type="button">계획서 보러가기</button>
                    <button type="button">보고서 보러가기</button>
                </S.ViewButton>
                <S.Etc>
                    <span>기타</span>
                    <S.EtcButton>
                        <button type="button">
                            <img src={git} alt="git"/>
                            <span>깃허브</span>
                        </button>
                        <button type="button">
                            <img src={api} alt="api"/>
                            <span>api 명세</span>
                        </button>
                        <button type="button">
                            <img src={fn} alt="function"/>
                            <span>기능 명세</span>
                        </button>
                        <button type="button">
                            <img src={git} alt="git"/>
                            <span>깃허브</span>
                        </button>
                    </S.EtcButton>
                </S.Etc>
            </S.Modal>
        </S.Main>
    );
};

export default ViewProjectModal;