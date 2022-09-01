import React from 'react';
import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostList from '../components/PostList';

export default {
  title: 'Example/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>;

const TemplateArray = ({ postList }) => (
  <PostList postList={postList} />
);

export const Item = TemplateArray.bind({});
Item.args = {
  postList: [
    { id: '', date: 'March.15.2022', title : '타이틀', description: '설명' },
  ],
};

export const Items = TemplateArray.bind({});
Items.args = {
  postList: [
    { id: '', date: 'April.05.2021', title : '타이틀', description: '설명' },
    { id: '', date: 'March.15.2022', title : '타이틀', description: '설명' },
  ],
};
