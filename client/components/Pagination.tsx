
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

interface PaginationProps {
  prevEnd: boolean,
  prev: boolean,
  next: boolean,
  nextEnd: boolean,
  pageNumbers?: {
    href: string,
    current: boolean,
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  
  & > a {
    display: block;
    margin: 0 5px;
    padding: 0 3px;
    color: ${props => props.theme.colors.grey700};
    ${props => props.theme.fonts.body1Regular};

    &:hover {
      color: ${props => props.theme.colors.grey900};
      font-weight: 700;
    }

    &[aria-current='current'],
    &[aria-current='current']:hover {
      color: ${props => props.theme.colors.primary700};
      font-weight: 700;
    }
  }
`;

const ButtonArrow = props => (
  <ButtonArrowCommon
    type="button"
    {...props}
  />
)

const ButtonArrowCommon = styled.button`
  &::before,
  &::after {
    display: inline-block;
    width: 9px;
    height: 9px;
    margin: 0 auto;
    border: 1px solid ${props => props.theme.colors.grey700};
    border-width: 0 0 1px 1px;
    vertical-align: middle;
    content: '';
  }

  &:disabled {
    &::before,
    &::after {
      border-color: ${props => props.theme.colors.grey400};
    }
  }

  &::after {
    margin-left: -5px;
  }

  &:not(:disabled) {
    &:hover {
      &::before,
      &::after {
        border-color: ${props => props.theme.colors.grey900};
        border-width: 0 0 1.5px 1.5px;
      }
    }
  }
`;

const ButtonNextBox = styled.div`
  & > button {
    &::before,
    &::after {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;

const ButtonPrevBox = styled.div`
  & > button {
    &::before,
    &::after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

const buttonNotEnd = css`
  &::after {
    content: none;
  }
`;

/*
* @description
* tabIndex 순서 - 페이지 넘버, 다음 버튼, 이전 버튼
*/
const Pagination: FunctionComponent<PaginationProps> = ({
  prevEnd,
  prev,
  next,
  nextEnd,
  pageNumbers,
}) => {
  return (
    <Container aria-label="pagination" role="navigation">
      <ButtonPrevBox>
        {/* disabled? 보이지 않게? 분기는 페이징 처리하면서? */}
        <ButtonArrow
          disabled={!prevEnd}
          tabIndex={5}
          aria-label="처음 페이지"
        />

        <ButtonArrow
          css={buttonNotEnd}
          disabled={!prev}
          tabIndex={4}
          aria-label="이전 페이지"
        />
      </ButtonPrevBox>

      {pageNumbers.map((data, index) => {
        return (
          <Link
            href={data.href}
            key={data.href}
          >
            <a
              // onClick={}
              tabIndex={1}
              aria-current={data.current ? 'current' : null
            }>{index + 1}</a>
          </Link>
        )
      })}

      <ButtonNextBox>
        <ButtonArrow
          css={buttonNotEnd}
          disabled={!next}
          aria-label="다음 페이지"
          tabIndex={2}
        />

        <ButtonArrow
          disabled={!nextEnd}
          aria-label="마지막 페이지"
          tabIndex={3}
        />
      </ButtonNextBox>
    </Container>
  );
};

export default Pagination;
