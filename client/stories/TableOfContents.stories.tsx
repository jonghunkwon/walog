import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TableOfContents from '../components/TableOfContents';

export default {
  title: 'Example/Toc',
  component: TableOfContents,
} as ComponentMeta<typeof TableOfContents>;

const Template: ComponentStory<typeof TableOfContents> = (args) => <TableOfContents {...args} />;

export const Component = Template.bind({});
Component.args = {
  data : [
    {
      sectionTitle: '타이틀',
      items: [
        { sectionItem: '타이틀' }
      ],
    },
    {
      isActive: true,
      sectionTitle: '타이틀2',
      items: [
        { sectionItem: '타이틀2-1' },
        { sectionItem: '타이틀2-2', isActive: true },
      ],
    },
    {
      sectionTitle: '타이틀3',
    },
  ]
};
