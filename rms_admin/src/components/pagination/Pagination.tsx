import React, { FC } from 'react';
import * as S from './style';

interface Props {
  page: number;
  totalPage: number;
  setPage: (payload: number) => void;
}

const Pagination: FC<Props> = props => {
  const { page, totalPage, setPage } = props;

  const onClickPrev = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const onClickNext = () => {
    if (page === totalPage) {
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
      {Array(totalPage >= 5 ? 5 : totalPage)
        .fill(0)
        .map((v, i) => {
          if((parseInt(String((page - 1) / 5)) * 5 + i + 1) > totalPage){
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
