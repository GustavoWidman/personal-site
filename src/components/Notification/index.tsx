import {
	useState, useEffect,
	MutableRefObject
}								from 'react';
import { createRoot }			from 'react-dom/client';
import DoneIcon				 	from '@material-ui/icons/Done';
import ErrorOutlineIcon			from '@material-ui/icons/ErrorOutline';




const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => prevProgress + 1);
		}, 5);

		setTimeout(() => {
			clearInterval(timer);
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<progress value={progress} max="330" className="w-full h-1" />
	);
};


interface NotificationProps {
    text: string;
    type: string;
    close: () => void;
}


const Notification: React.FC<NotificationProps> = ({ text, type, close }) => {
	const notification = (
		<div className={`toast transition duration-500 ease-in-out transform`} id='inner-toast'
			onClick={close}>
			<div className={`alert alert-${type}`}>
				{type === 'error' ? <ErrorOutlineIcon /> : <DoneIcon />}
				<span>{text}</span>
				<button className="text-2xl">
					&times;
				</button>
			</div>
			<ProgressBar />
		</div>
	);

	return notification;
};


export const Notify = (text: string, type: string, notifying: MutableRefObject<boolean>) => {
    notifying.current = true;

    // Create a container for the notification
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.position = 'absolute';
    toast.style.top = '0';
    toast.style.left = '0';

    // Append the container to the desired parent element
    const parent = document.getElementById('notification');
    parent?.prepend(toast);

    // Create a root and render the notification
    const root = createRoot(toast);
    root.render(<Notification text={text} type={type} close={() => {
        const toastElement = document.getElementById(`inner-toast`);
        if (toastElement) toastElement.classList.add('translate-x-[100%]');
        setTimeout(() => {
            root.unmount();
            toast.remove();
            notifying.current = false;
        }, 400);
    }} />);

    // Setup auto-close timer
    setTimeout(() => {
        const toastElement = document.getElementById(`inner-toast`);
        if (toastElement) toastElement.classList.add('translate-x-[100%]');
        setTimeout(() => {
            root.unmount();
            toast.remove();
            notifying.current = false;
        }, 400);
    }, 5000);
};