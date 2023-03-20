import Footer from './Footer';

export default function Home() {
	return (
		<div className='flex bg-[cover] h-full overflow-y-auto background-image'>
			<div className='flex flex-col lg:grid lg:grid-cols-2 pt-[72px] h-full'>
				<div className='p-4 h-full justify-center items-center text-center text-white relative pt-8'>
					<h1>
						<strong className='italic text-5xl text-shadow'>
							Welcome!
						</strong>
					</h1>
					<p className='relative sm:text-4xl text-3xl text-shadow m-10'>
						Dead Drift Flycasters is a team of passionate anglers
						who travel around the US exploring various waterways.
					</p>
				</div>
				<div className='w-full h-full relative m-auto'>
					<div className='video-container p-8'>
						<iframe
							className='bg-black w-full max-w-4xl h-full aspect-video rounded-xl relative '
							title='vimeo-player'
							src='https://player.vimeo.com/video/808878641?h=722da046f4'
							frameborder='0'
							allowfullscreen
						></iframe>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
