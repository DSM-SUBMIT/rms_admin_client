import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { ProjectsType } from '../../../constance/viewProject';
import * as S from '.';
import { git, api, fn, closeModalIcon} from '../../../asset'
import useViewProject from '../../../util/hooks/viewProject/useViewProject';

interface Props {
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewProjectModal : FC<Props> = props => {
    const history = useHistory();
    const { setIsOpenModal } = props;
    const {state, setState} = useViewProject();
    const closeBoxClickHandler = () => {
        if (setIsOpenModal !== undefined) setIsOpenModal(false);
    };

    return (
        <>
            <S.Main onClick={closeBoxClickHandler}/>
            <S.Modal>
                <S.Close onClick={closeBoxClickHandler}>
                    <img src={closeModalIcon} alt="close"/>
                </S.Close>
                <S.ProjectName>{state.currentProjectTitle}</S.ProjectName>
                <S.ProjectViewButton>
                    <button type="button" onClick={(e) => {
                        history.push(`/view/plan/${state.currentProjectId}`);
                    }}>계획서 보러가기</button>
                    <button type="button" onClick={(e) => {
                        history.push(`/view/detail-report/${state.currentProjectId}`);
                    }}>보고서 보러가기</button>
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