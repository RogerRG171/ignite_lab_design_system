import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../logo';
import axios from 'axios';

import '../styles/global.css';

export function SignIn() {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'roger@gmail.com',
            password: '1234',
        })

        setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100'>
            <header className='flex  flex-col items-center'>
                <Logo className='m-0' />
                <Heading size='lg' children='Ignite Lab' className='mt-0 mb-1' />
                <Text size='lg' className='text-gray-400 mb-10'>Faça login e começa a usar!</Text>
            </header>
            <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-[400px] gap-4'>
                {isUserSignedIn && <Text className='text-green-500 self-center'>Login realizado!</Text>}

                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text size='md' className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail'>

                        </TextInput.Input>
                    </TextInput.Root>
                </label>

                <label htmlFor='password' className='flex flex-col gap-3 '>
                    <Text size='md' className='font-semibold'>Sua senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type='password' id='password' placeholder='************'>

                        </TextInput.Input>
                    </TextInput.Root>
                </label>
                <label htmlFor='remember' className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200' >Lembrar de mim por 30 dias</Text>
                </label>
                <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
            </form>

            <footer className='flex flex-col items-center justify-center mt-8 gap-4'>
                <Text asChild size='sm'>
                    <a href='#' className='text-gray-400 underline hover:text-gray-200' >Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href='#' className='text-gray-400 underline hover:text-gray-200' >Não possui uma conta? Faça uma agora!</a>
                </Text>
            </footer>


        </div>
    )
}