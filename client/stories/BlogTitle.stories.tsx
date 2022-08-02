import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BlogTitle from '../components/BlogTitle';

export default {
  title: 'Example/BlogTitle',
  component: BlogTitle,
} as ComponentMeta<typeof BlogTitle>;

const Template: ComponentStory<typeof BlogTitle> = (args) => <BlogTitle {...args} />;

export const Component = Template.bind({});
Component.args = {
  title : '와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀',
  dateTime: 'March.15.2022'
};
