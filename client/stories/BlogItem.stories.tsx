import React from 'react';
import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BlogItem from '../components/BlogItem';

export default {
  title: 'Example/BlogItem',
  component: BlogItem,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BlogItem>;

const Li = styled.li`
  & ~ li { 
    border-top: 1px solid #dde2e6;
  }
`;

const TemplateArray = ({ data }) => (
  <ul>
    {data?.map((data, index) => {
      return (
        <Li key={`blogItem_${index}`}>
          <BlogItem
            {...data}
          />
        </Li>
      );
    })}
  </ul>
);

export const Item = TemplateArray.bind({});
Item.args = {
  data: [
    { href: '/', dateTime: 'March.15.2022', title : '타이틀', description: '설명' },
  ],
};

export const Items = TemplateArray.bind({});
Items.args = {
  data: [
    { href: '/', dateTime: 'April.05.2021', title : '타이틀', description: '설명' },
    { href: '/', dateTime: 'March.15.2022', title : '타이틀', description: '설명' },
  ],
};
