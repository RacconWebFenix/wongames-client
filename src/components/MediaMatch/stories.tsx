import { Meta, StoryFn } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn = () => <MediaMatch>Only on Desktop</MediaMatch>
