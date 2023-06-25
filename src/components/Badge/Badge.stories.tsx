import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Ga2 Food',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1906-3469&mode=design&t=MwsJZvIYHqlIDNdW-4',
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
