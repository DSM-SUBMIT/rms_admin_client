import React, { FC } from "react";
import * as S from "./style";

const Pagination: FC = () => {
  return (
    <S.PaginationWrapper>
        <S.PaginationButton>{"<"}</S.PaginationButton>
        {Array(5)
            .fill(0)
            .map((v, i) => {
            return (
                <S.PaginationButton key={i + 1}>{i + 1}</S.PaginationButton>
            );
            })}
        <S.PaginationButton>{">"}</S.PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
