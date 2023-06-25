import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Component } from 'react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + footer
    </DummyComponent>
  ),
}

export const StickyHeader = Template.bind({})
StickyHeader.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>Template with sticky header and navigation items + footer</DummyComponent>
  ),
}

export const Basic = Template.bind({})
Basic.args = {
  type: 'basic',
  children: (
    <DummyComponent>
      Template with scrollable header and no navigation items + no footer
    </DummyComponent>
  ),
}

export const WithItemsInTheCart = Template.bind({})
WithItemsInTheCart.parameters = {
  store: {
    initialState: { cart: { items: cartItems } },
  },
}
