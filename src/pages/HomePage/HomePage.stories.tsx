import { ComponentMeta, ComponentStory } from '@storybook/react'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/Homepage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
    },
  },
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Default = Template.bind({})
