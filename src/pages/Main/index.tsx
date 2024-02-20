// import React from 'react';
import Intro	from '../../components/Intro';
import About	from '../../components/About';
// import FunnySans from '../FunnySans';
// import Links from '../Links';
// import WhatIDo from '../WhatIDo';
// import Projects from '../Projects';
// import SecretButton from '../SecretButton';
// import styles from './index.module.css'

export default () => {

  return (
		<section className="body-font">
			<div className="container px-5 pb-24 pt-12 mx-auto">

				<Intro />
				<About />

				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
					<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-yellow-600 mb-5 flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
						</div>

						<div className="flex-grow">
							<h2 className="text-lg title-font font-medium mb-3">Shooting Stars</h2>
							<p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
							<a className="mt-3 text-yellow-600 inline-flex items-center">Learn More
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>

					<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-yellow-600 mb-5 flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
								<circle cx="6" cy="6" r="3"></circle>
								<circle cx="6" cy="18" r="3"></circle>
								<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
							</svg>
						</div>

						<div className="flex-grow">
							<h2 className=" text-lg title-font font-medium mb-3">The Catalyzer</h2>
							<p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
							<a className="mt-3 text-yellow-600 inline-flex items-center">Learn More
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>

					<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-yellow-600 mb-5 flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>

						<div className="flex-grow">
							<h2 className="text-lg title-font font-medium mb-3">Neptune</h2>
							<p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
							<a className="mt-3 text-yellow-600 inline-flex items-center">Learn More
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<button className="flex mx-auto mt-16 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>

			</div>
		</section>
  	)
}