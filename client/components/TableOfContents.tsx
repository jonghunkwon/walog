
import React, { FunctionComponent } from "react";
import SkipNavigation from "./SkipNavigation";
import styled from "@emotion/styled";

interface TableOfContentsProps {
  data?: {
    isActive: boolean,
    sectionTitle: string,
    items?: {
      isActive: boolean,
      sectionItem: string,
    },
  },
}
  
const ContentList = styled.ol`
  position: relative;

  a {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    vertical-align: top;
    white-space: nowrap;
  }

  ol {
    margin-left: 18px;
  }
`;
  
const SectionTitleLink = styled.a`
  margin: 4px 0;
  ${props => props.theme.fonts.body2Regular};

  &.active {
    font-weight: 700;
  }
`;

const SectionItemList = styled.ol`
  position: relative;

  &::before {
    position: absolute;
    top: -1px;
    bottom: 0;
    left: 0;
    width: 2px;
    background-color: ${props => props.theme.colors.primary100};
    content: '';
  }

  li {
    & ~ li {
      margin-top: 5px;
    }
  }
`;
  
const SectionItemLink = styled.a`
  padding-left: 8px;

  &.active {
    position: relative;

    &::before {
      position: absolute;
      top: -1px;
      bottom: -1px;
      left: 0;
      width: 2px;
      background-color: ${props => props.theme.colors.primary200};
      content: '';
    }
  }
`;

const TableOfContents: FunctionComponent<TableOfContentsProps> = ({ data }) => {
  return (
    <div>
      <strong className="blind">컨텐츠 목차</strong>
      <SkipNavigation contentId="detailContent" contentText="navition" />

      <ContentList>
        {data?.map((data, index) => {
          return (
            <li key={`section${index}`}>
              <SectionTitleLink href={`#${data.sectionTitle}`} className={data.isActive ? 'active' : ''}>{data.sectionTitle}</SectionTitleLink>
              {data.items && 
                <SectionItemList>
                  {data.items?.map((item) => {
                    return (
                      <li key={item.sectionItem}>
                        <SectionItemLink href={`#${item.sectionItem}`} className={item.isActive ? 'active' : ''}>{item.sectionItem}</SectionItemLink>
                      </li>
                    )
                  })}
                </SectionItemList>
              }
            </li>
          );
      })}
      </ContentList>
    </div>
  );
};

export default TableOfContents;
