import { ComponentMeta, ComponentStory } from '@storybook/react'

//import { RestaurantsSectionComponent as RestaurantsSection } from './RestaurantsSection.container'
import { rest } from 'msw'

import { restaurants } from '../../../../stub/restaurants'
import { BASE_URL } from '../../../../api'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=332-953&mode=design&t=o34IvytmNb1eiB7V-4',
    },
  },
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favourite picks',
  // restaurants
}
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(BASE_URL, (req, res, ctx) =>
        //  res(ctx.delay(1000), ctx.json(restaurants)))],
        res(ctx.delay('infinite'))
      ),
    ],
  },
}
