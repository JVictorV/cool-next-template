import { FC } from 'react';
import { IconType } from 'react-icons';
import { SiFramer, SiTailwindcss, SiTypescript } from 'react-icons/si';
import XStateIcon from '../components/XStateIcon';
import ReactHookFormIcon from '../components/ReactHookFormIcon';
import ReactQueryIcon from '../components/ReactQueryIcon';

const Card: FC<{ title: string; description: string; icon: IconType }> = ({ title, description, icon: Icon }) => {
	return (
		<div className='max-w-md h-64 w-full flex flex-col'>
			<h1 className='text-white text-4xl lg:text-5xl text-center font-bold'>{title}</h1>
			<Icon className='mx-auto text-white text-6xl my-auto' />
			<span className='text-white text-xl text-center'>{description}</span>
		</div>
	);
};

const Index: FC = () => {
	return (
		<div className='h-full overflow-x-hidden'>
			<div className='flex flex-col items-center justify-center h-almost-full'>
				<svg className='h-24 my-8' viewBox='0 0 116 100' fill='#000' xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd' clipRule='evenodd' d='M57.5 0L115 100H0L57.5 0z' />
				</svg>
				<h1 className='text-center text-5xl sm:text-6xl flex flex-col sm:flex-row'>
					{'A cooler '}
					<svg viewBox='0 0 148 90' className='h-16 sm:mx-4'>
						<path d='M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z' />
					</svg>
					{' template!'}
				</h1>
			</div>
			<div className='bg-gray-900 py-16 flex justify-center'>
				<div className='grid-cols-1 max-w-screen-2xl w-full grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-24 p-4'>
					<Card
						icon={ReactHookFormIcon}
						title='React Hook Form'
						description='Performant, flexible and extensible forms with easy-to-use validation.'
					/>
					<Card
						icon={XStateIcon}
						title='XState'
						description='JavaScript and TypeScript finite state machines and statecharts for the modern web.'
					/>
					<Card
						icon={ReactQueryIcon}
						title='React Query'
						description='Performant and powerful data synchronization for React.'
					/>
					<Card
						icon={SiFramer}
						title='Framer Motion'
						description='A production-ready motion library for React.'
					/>
					<Card
						icon={SiTailwindcss}
						title='Tailwind'
						description='A utility-first CSS framework for rapidly building custom designs.'
					/>
					<Card
						icon={SiTypescript}
						title='Typescript'
						description='A javascript superset that brings types and some superpowers to the table.'
					/>
				</div>
			</div>
		</div>
	);
};

export default Index;
