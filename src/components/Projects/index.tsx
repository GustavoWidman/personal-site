import { useRef }		from 'react'
import PersonalSite1	from '../../assets/personal_site_1.png'
import PersonalSite2	from '../../assets/personal_site_2.png'



interface CardProps {
    title: string
    link: string
    image: string
	image2: string
	children: any
}
const Card: React.FC<CardProps> = ({ title, link, image, image2, children }) => {
	const img = useRef<HTMLImageElement | null>(null);
	return (
	<div className={`
		hover:bg-[#161616] transition duration-300 bg-[#121212] rounded-md
		shadow-[4px_4px_0_white]
		hover:shadow-none w-[500px] hover:scale-[1.01] hover:-rotate-1 m-auto my-10`
	}>
		<a href={link} target='_blank' rel='noopener noreferrer'>
			<div className=''
				onMouseEnter={() => {if (img.current) img.current.style.opacity = '1'}}
				onMouseLeave={() => {if (img.current) img.current.style.opacity = '0'}}
			>
				<h5 className='font-semibold text-3xl text-center pt-4'>
					{title}
				</h5>
				<div className='m-5 px-12 flex justify-center'>
					<img src={image2} ref={img} alt={`${title} should go here...`} className='absolute transition duration-300 opacity-0 object-cover h-80 w-80'></img>
					<img src={image} className='object-cover h-80 w-80'></img>
				</div>
				<div className='flex flex-wrap pb-8 pt-2 px-12 break-normal'>
					{children}
				</div>
			</div>
		</a>
	</div>
)}


export const ProjectsComponent = () => {
	return (
		<div>
			<div className='m-auto w-[95%] flex justify-between flex-wrap'>
				<Card
					title='Site Pessoal'
					link='https://gustavowidman.com'
					image={PersonalSite1}
					image2={PersonalSite2}
				>
					Aqui vai uns textao sobre o ngc tlgd, umas pira dessas bem legal assim eu vo explicando qq faz o projeto e tals ai tu vai lendo e fica tudo leganzin tmj pae
				</Card>
				<Card
					title='Site Pessoal (2)'
					link='https://gustavowidman.com'
					image={PersonalSite1}
					image2={PersonalSite2}
				>
					Description
				</Card>
			</div>
			<div className='m-auto w-[95%] flex justify-between flex-wrap'>
				<Card
					title='Site Pessoal'
					link='https://gustavowidman.com'
					image={PersonalSite1}
					image2={PersonalSite2}
				>
					Aqui vai uns textao sobre o ngc tlgd, umas pira dessas bem legal assim eu vo explicando qq faz o projeto e tals ai tu vai lendo e fica tudo leganzin tmj pae
				</Card>
				<Card
					title='Site Pessoal (2)'
					link='https://gustavowidman.com'
					image={PersonalSite1}
					image2={PersonalSite2}
				>
					Description
				</Card>
			</div>
		</div>
	)
}