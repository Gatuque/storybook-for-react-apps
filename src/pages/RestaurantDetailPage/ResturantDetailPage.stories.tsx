import exp from 'constants'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { RestaurantDetailPage } from './RestaurantDetailPage'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=332%3A169&mode=design&t=JkBpQRgZxNqWlPbJ-1',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const Template: ComponentStory<typeof RestaurantDetailPage> = () => (
  <>
    <RestaurantDetailPage />
    <div id="modal"></div>
  </>
)

export const Default = Template.bind({})

export const Resturant1 = Template.bind({})
Resturant1.parameters = {
  deeplink: {
    path: '/restaurants/:id',
    route: '/restaurants/1',
  },
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
  },
}

export const Resturant2 = Template.bind({})
Resturant2.parameters = {
  deeplink: {
    path: '/restaurants/:id',
    route: '/restaurants/2',
  },
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[1])))],
  },
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(404)))],
  },
}

export const Error = Template.bind({})
Error.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(500)))],
  },
}
