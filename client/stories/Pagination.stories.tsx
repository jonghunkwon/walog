import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const component = Template.bind({});
component.args = {
  pageNumbers : [
    { href: '/1', current: true },
    { href: '/2' },
    { href: '/3' },
  ]
};
