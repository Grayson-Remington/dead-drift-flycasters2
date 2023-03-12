import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Squeeze as Hamburger } from 'hamburger-react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className='fixed w-full bg-yellow-500 text-white text-shadow h-[72px] z-10'>
			<div className='flex justify-between md:justify-center h-full w-full px-2 sm:px-4 lg:px-8 items-center '>
				<div className='hidden list-none items-stretch justify-center h-full  md:flex w-auto gap-4'>
					<CustomLink
						to='/'
						className='overflow-hidden text-inherit font-medium p-2 h-full flex items-center active:bg-white'
					>
						Home
					</CustomLink>
					<CustomLink
						to='/team'
						className='text-inherit font-medium p-2 h-full flex items-center text-center active:bg-white'
					>
						The Team
					</CustomLink>
				</div>

				<div className='flex gap-2 py-4 md:p-4'>
					<img
						className='aspect-auto h-8'
						src='./assets/dead-drift-river.png'
						alt=''
					/>
					<img
						className='aspect ratio-auto h-10'
						src='./assets/dead-drift-logo.png'
						alt=''
					/>
				</div>
				<div className='p-0 m-0 list-none hidden md:flex items-stretch h-full w-auto gap-4'>
					<CustomLink
						to='/upcomingevents'
						className='text-inherit font-medium h-full flex p-2 items-center active:bg-white'
					>
						Upcoming Events
					</CustomLink>
					<CustomLink
						to='/videos'
						className='text-inherit font-medium h-full flex items-center p-2 text-center active:bg-white'
					>
						Videos
					</CustomLink>
				</div>
				<button
					className='md:hidden inline-flex items-center justify-end'
					onClick={() => setIsOpen(!isOpen)}
					type='button'
					aria-controls='mobile-menu'
					aria-expanded='false'
				>
					<Hamburger
						className='md:hidden'
						toggled={isOpen}
						toggle={setIsOpen}
					/>
				</button>
			</div>
			<Transition
				show={isOpen}
				enter='transition ease-out duration-100 transform'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='transition ease-in duration-75 transform'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'
			>
				{(ref) => (
					<div
						ref={ref}
						className='md:hidden w-full bg-black flex flex-col list-none'
						id='mobile-menu'
					>
						<CustomLink
							to='/'
							className='block text-white font-medium text-center text-2xl m-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							Home
						</CustomLink>
						<CustomLink
							to='/team'
							className='block text-white font-medium text-center text-2xl m-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							The Team
						</CustomLink>
						<CustomLink
							to='/upcomingevents'
							className='block text-white font-medium text-center text-2xl m-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							Upcoming Events
						</CustomLink>
						<CustomLink
							to='/videos'
							className='block text-white font-medium text-center text-2xl m-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							Videos
						</CustomLink>
					</div>
				)}
			</Transition>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? 'active' : ''}>
			<Link
				to={to}
				{...props}
			>
				{children}
			</Link>
		</li>
	);
}
