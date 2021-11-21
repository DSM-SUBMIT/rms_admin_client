import React, { FC } from "react";
import { MemberType } from "../../../models/dto/response/planResponse";
import * as S from "../style";

const ProjectMember: FC<MemberType> = (props) => {
  return (
    <>
      <S.ThisProjectMemberWrapper>
        <S.ThisProjectMemberName>{props.name}</S.ThisProjectMemberName>
        <S.ThisprojectMemberRole>{props.role}</S.ThisprojectMemberRole>
      </S.ThisProjectMemberWrapper>
    </>
  );
};

export default ProjectMember;