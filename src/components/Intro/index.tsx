import { useCopyToClipboard }	from 'usehooks-ts'
import ReactDOM					from 'react-dom';
import { useState, useEffect } 	from 'react';
import GustavoPortrait			from '../../assets/gustavo.jpg';
import GitHubIcon				from '@material-ui/icons/GitHub';
import LinkedInIcon				from '@material-ui/icons/LinkedIn';
import AttachmentIcon			from '@material-ui/icons/Attachment';
import EmailIcon 				from '@material-ui/icons/Email';

const SocialsButton = ({children, onClick}: any) =>
  	<button className='rounded-md border-2 hover:border-2 border-white hover:border-white hover:transform hover:translate-x-1 hover:translate-y-1 translate hover:shadow-none shadow-[4px_4px_0_white] font-normal h-12 px-4 transition duration-200 ease-in-out transform hover:scale-100 shadow-smx hover:bg-zinc-900 active:scale-105' onClick={onClick}>
    	{children}
  	</button>

const ErrorIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
)

const SuccessIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
)

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => prevProgress + 3);
		}, 10);

		setTimeout(() => {
			clearInterval(timer);
		}, 5500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<progress value={progress} max="1000" className="w-full h-1" />
	);
};

const Notification = (text: string, type: string, close: any) => (
	<div className={`toast`}>
		<div className={`alert alert-${type}`}>
			{type === 'error' ? <ErrorIcon /> : <SuccessIcon />}
			<span>{text}</span>
			<button onClick={close} className="text-2xl">&times;</button>
		</div>
		<ProgressBar />
	</div>
)


const Notify = (text: string, type: string) => {
	const notification = Notification(
		text,
		type,
		() => ReactDOM.unmountComponentAtNode(document.getElementById('notification') as Element)
	);

	// add to current page
	ReactDOM.render(notification, document.getElementById('notification'));

	const timer = setTimeout(() => {
		ReactDOM.unmountComponentAtNode(document.getElementById('notification') as Element);
		clearTimeout(timer);
	}, 5500);
}

export default () => {
	const [_, copy] = useCopyToClipboard()



	const handleCopy = (text: string) => () => {
		copy(text)
			.then(() => {
				Notify(`Email copiado para a área de transferência: ${text}`, 'success');
			})
			.catch(err => {
				Notify('Erro ao copiar email para a área de transferência', 'error');
				console.log(err);
			});
	}


	return (
	<div className="text-center mb-20">
		<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
			Prazer, sou o Gustavo
		</h1>
		<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
			Desenvolvedor Backend e estudante de Engenharia da Computação no INTELI.
		</p>

		{/* Divider thing */}
		<div className="flex mt-6 justify-center">
			<div className="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
		</div>

		{/* Image of me */}
		<div className="flex justify-center mt-6">
			<div className="w-full flex flex-col items-center">
				<img src={GustavoPortrait} alt="Gustavo" className="rounded-md object-cover h-96 w-72 hover:rotate-1 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-smx"/>
				<caption className='w-full mt-4'>Fato interessante: o plano de fundo dessa imagem é parcialmente gerado por IA</caption>
			</div>
		</div>

		{/* My socials */ }
		<div className="flex justify-center mt-6">
			<div className="flex flex-row space-x-4">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/GustavoWidman">
					<SocialsButton>
						Github &nbsp; <GitHubIcon />
					</SocialsButton>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-widman/">
					<SocialsButton>
						LinkedIn &nbsp; <LinkedInIcon />
					</SocialsButton>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://links.r3dlust.com/curriculo">
					<SocialsButton>
						Currículo &nbsp; <AttachmentIcon />
					</SocialsButton>
				</a>
				<SocialsButton onClick={handleCopy('gustavowidman@gmail.com')}>
					Email &nbsp; <EmailIcon />
				</SocialsButton>
			</div>
		</div>
		<div id="notification"></div>
	</div>
)};