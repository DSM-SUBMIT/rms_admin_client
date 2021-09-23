import React from 'react';
import * as S from './style';
import { git, api, fn, close} from '../../../asset'

const ViewProjectModal = () => {
    return (
        <S.Main>
            <S.Modal>
                <S.Close>
                    <img src={close} alt="close"/>
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