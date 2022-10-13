import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={
                clsx(
                    'bg-cyan-500 transition-colors hover:bg-cyan-300 rounded py-3 px-4 font-semibold font-sans text-black text-sm w-full focus:ring-2 ring-white',
                )
            }
        >
            {children}
        </Comp>
    )
}