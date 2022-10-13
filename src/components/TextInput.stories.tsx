import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';
import { EnvelopeSimple } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [

            <TextInput.Icon>
                <EnvelopeSimple />
            </TextInput.Icon>,
            <TextInput.Input placeholder='type your e-mail' />

        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='type your e-mail' />
    }
}
