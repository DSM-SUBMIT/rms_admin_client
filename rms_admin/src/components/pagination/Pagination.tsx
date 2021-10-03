import React, { FC } from 'react';
import { PlanType } from '../../models/dto/response/planListResponse';
import { setPage } from '../../modules/redux/action/planList';
import * as S from './style';

interface Props {
  page: number;
  total_page: number;
  setPage: (payload: number) => void;
}

const Pagination: FC<Props> = props => {
  const { page, total_page, setPage } = props;

  const onClickPrev = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const onClickNext = () => {
    if (page === total_page) {
      return;
    } else {
      setPage(page + 1);
    }
  };

  const onClickPageNumber = (pageNum: number) => {
    setPage(pageNum);
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationButton onClick={onClickPrev}>{'<'}</S.PaginationButton>
      {Array(total_page >= 5 ? 5 : total_page)
        .fill(0)
        .map((v, i) => {
          if((parseInt(String((page - 1) / 5)) * 5 + i + 1) > total_page){
            return '';
          }
          return (
            <S.PaginationButton
              key={i + 1}
              style={{ color: parseInt(String((page - 1) / 5)) * 5 + i + 1 === page ? '#386BEE' : 'black' }}
              onClick={() => {
                onClickPageNumber(parseInt(String((page - 1) / 5)) * 5 + i + 1);
              }}
            >
              {parseInt(String((page - 1) / 5)) * 5 + i + 1}
            </S.PaginationButton>
          );
        })}
      <S.PaginationButton onClick={onClickNext}>{'>'}</S.PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
