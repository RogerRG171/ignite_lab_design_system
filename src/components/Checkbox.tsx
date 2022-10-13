import { Check } from 'phosphor-react';
import { clsx } from 'clsx';
import * as checkbox from '@radix-ui/react-checkbox';

export interface CheckboxProps { }

export function Checkbox(props: CheckboxProps) {

    return (
        <checkbox.Root
            className='w-6 h-6 bg-gray-800 p-[2px] rounded'
        >
            <checkbox.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </checkbox.Indicator>
        </checkbox.Root>
    )
}