import React, { FC } from 'react';
import { useHistory } from 'react-router';
import * as S from '.';
import { git, api, fn, closeModalIcon} from '../../../asset'

interface Props {
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    title: string;
}

const ViewProjectModal : FC<Props> = props => {
    const history = useHistory();
    const { id, title, setIsOpenModal } = props;

    const closeBoxClickHandler = () => {
        if (setIsOpenModal !== undefined) setIsOpenModal(false);
    };

    const clickBtn = () => {
        history.push(`/view/plan/${id}`);
    }

    return (
        <>
            <S.Main onClick={closeBoxClickHandler}/>
            <S.Modal>
                <S.Close onClick={closeBoxClickHandler}>
                    <img src={closeModalIcon} alt="close"/>
                </S.Close>
                <S.ProjectName>{title}</S.ProjectName>
                <S.ProjectViewButton>
                    <button type="button" onClick={clickBtn}>계획서 보러가기</button>
                    <button type="button">보고서 보러가기</button>
                </S.ProjectViewButton>
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
        </>
    );
};

export default ViewProjectModal;