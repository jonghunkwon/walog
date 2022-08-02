import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import BlogItem from './BlogItem';

interface LayoutProps {
  children: ReactNode;
}

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: content-box;
`;

const BlogLists = styled.li`
  & ~ li {
    border-top: 1px solid ${props => props.theme.colors.grey300};
  }
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const BlogItems = [
    {href: '/', dateTime: 'March.15.2022', title : '타이틀', description: '설명'},
    {href: '/', dateTime: 'March.15.2022', title : '타이틀', description: '설명'},
  ];

  return (
    <div>
      <Header />
        <main>
          <Inner>
            {children}
              {BlogItems.length > 0 &&
              <ul>
                {BlogItems?.map((item) => {
                  return (
                    <BlogLists>
                      <BlogItem {...item} />
                    </BlogLists>
                    );
                  })}
              </ul>
            }
          </Inner>
        </main>
    </div>
  );
};

export default Layout;
