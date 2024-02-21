// import React from 'react';
import { IntroComponent }		from '../../components/Intro';
import { AboutComponent }		from '../../components/About';
import { SocialsComponent }		from '../../components/Socials';
import { ProjectsComponent }	from '../../components/Projects';
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

				<IntroComponent />
				<SocialsComponent />
				<AboutComponent />
				<ProjectsComponent />

			</div>
		</section>
  	)
}