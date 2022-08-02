import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogTitle } from './BlogTitle';

export default {
  title: 'Example/BlogTitle',
  component: BlogTitle,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BlogTitle>;

const Template: ComponentStory<typeof BlogTitle> = (args) => <BlogTitle {...args} />;

export const Title = Template.bind({});
Title.args = {
  title : '와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀 와디즈 기술 블로그 타이틀',
  dateTime: 'March.15.2022'
};
