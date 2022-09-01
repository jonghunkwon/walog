import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostTitle from '../components/PostTitle';

export default {
  title: 'Example/PostTitle',
  component: PostTitle,
} as ComponentMeta<typeof PostTitle>;

const Template: ComponentStory<typeof PostTitle> = (args) => <PostTitle {...args} />;

export const Component = Template.bind({});
Component.args = {
  title : '와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀',
  dateTime: 'March.15.2022'
};
