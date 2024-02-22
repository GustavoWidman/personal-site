import { useCopyToClipboard }	from 'usehooks-ts'
import { useRef }				from 'react';
import { Notify }				from '../Notification';
import GitHubIcon				from '@material-ui/icons/GitHub';
import LinkedInIcon				from '@material-ui/icons/LinkedIn';
import AttachmentIcon			from '@material-ui/icons/Attachment';
import EmailIcon 				from '@material-ui/icons/Email';


const SocialsButton = ({children, onClick}: any) => (
	<button className='rounded-md border-2 hover:border-2 border-white hover:border-white hover:transform hover:translate-x-1 hover:translate-y-1 translate hover:shadow-none shadow-[4px_4px_0_white] font-normal h-12 px-4 transition duration-200 ease-in-out transform hover:scale-100 shadow-smx hover:bg-zinc-900 active:scale-105' onClick={onClick}>
		{children}
	</button>
)

export const SocialsComponent = () => {
	const [_, copy] = useCopyToClipboard()
	const notifying = useRef(false);



	const handleCopy = (text: string) => () => {
		const viewportWidth = window.innerWidth;

		if (viewportWidth < 700) {
			copy(text)
				.then(() => {
					document.getElementById('modal-title')!.innerText = 'Sucesso!';
					document.getElementById('modal-text')!.innerText = `Email copiado para a área de transferência: ${text}`;

					const modal = document.getElementById('modal') as HTMLDialogElement;

					modal?.showModal();
				})
				.catch(err => {
					console.log(err);
					document.getElementById('modal-title')!.innerText = 'Erro!';
					document.getElementById('modal-text')!.innerText = 'Erro ao copiar email para a área de transferência';

					const modal = document.getElementById('modal') as HTMLDialogElement;

					modal?.showModal();
				});
		} else {
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
	}



	return (
		<div className='pb-12'>
			<div className="flex flex-wrap justify-center mt-6 gap-5 m-auto max-w-[460px] w-[80%]">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/GustavoWidman">
					<SocialsButton>
						<span className='font-semibold flex justify-center'>GitHub &nbsp; <GitHubIcon /></span>
					</SocialsButton>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-widman/">
					<SocialsButton>
					<span className='font-semibold flex justify-center'>LinkedIn &nbsp; <LinkedInIcon /></span>
					</SocialsButton>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://links.r3dlust.com/curriculo">
					<SocialsButton>
					<span className='font-semibold flex justify-center'>Currículo &nbsp; <AttachmentIcon /></span>
					</SocialsButton>
				</a>
			</div>
			<div className="flex flex-wrap justify-center mt-6 gap-y-10 gap-x-4 m-auto max-w-[600px]">
				<a>
					<SocialsButton onClick={handleCopy('gustavowidman@gmail.com')}>
						<span className='font-semibold flex justify-center'>Email &nbsp; <EmailIcon /></span>
					</SocialsButton>
				</a>
			</div>
			<div id="notification"></div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
			<dialog id="modal" className="modal modal-bottom">
				<div className="modal-box">
					<h3 className="font-bold text-lg" id='modal-title'>Sucesso!</h3>
					<p className="py-4" id='modal-text'>Press ESC key or click the button below to close</p>
					<div className="modal-action">
					<form method="dialog">
						<button className="btn">Fechar</button>
					</form>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
};