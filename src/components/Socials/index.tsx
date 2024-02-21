import { useCopyToClipboard }	from 'usehooks-ts'
import { useRef }				from 'react';
import { Notify }				from '../Notification';
import GitHubIcon				from '@material-ui/icons/GitHub';
import LinkedInIcon				from '@material-ui/icons/LinkedIn';
import AttachmentIcon			from '@material-ui/icons/Attachment';
import EmailIcon 				from '@material-ui/icons/Email';


const SocialsButton = ({children, onClick}: any) => (
	<button className='rounded-md border-2 hover:border-2 border-white hover:border-white hover:transform hover:translate-x-1 hover:translate-y-1 translate hover:shadow-none shadow-[4px_4px_0_white] font-normal h-12 px-4 transition duration-200 ease-in-out transform hover:scale-100 shadow-smx hover:bg-zinc-900 active:scale-105 m-auto' onClick={onClick}>
		{children}
	</button>
)

export const SocialsComponent = () => {
	const [_, copy] = useCopyToClipboard()
	const notifying = useRef(false);



	const handleCopy = (text: string) => () => {
		copy(text)
			.then(async () => {
				while (notifying.current) await new Promise<void>((resolve) => setTimeout(() => resolve(), 100));

				Notify(`Email copiado para a área de transferência: ${text}`, 'success', notifying)
			})
			.catch(async err => {
				console.log(err);
				while (notifying.current) await new Promise<void>((resolve) => setTimeout(() => resolve(), 100));
				Notify('Erro ao copiar email para a área de transferência', 'error', notifying);
			});
	}




	return (
		<div className='pb-20'>
			<div className="flex flex-row justify-center mt-6 gap-4 w-[80%] m-auto max-w-[600px]">
				<div className="space-x-4 m-auto">
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
	)
};