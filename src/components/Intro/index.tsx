import GustavoPortrait			from '../../assets/gustavo.jpg';




export const IntroComponent = () => (
	<div className="text-center mb-0">
		<h1 className="sm:text-3xl text-4xl font-medium title-font mb-4">
			Prazer, sou o Gustavo
		</h1>
		<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
			Desenvolvedor Backend e estudante de Engenharia da Computação.
		</p>

		{/* Divider thing */}
		<div className="flex mt-4 justify-center">
			<div className="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
		</div>

		{/* Image of me */}
		<div className="flex justify-center mt-8">
			<div className="flex flex-col items-center w-[350px]">
				<img src={GustavoPortrait} alt="Gustavo" className="rounded-md object-cover h-[450px] w-[350px] hover:rotate-1 transition duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-2xl shadow-xl" />
				<a className='w-full mt-3 text-left text-xs'>Fato interessante: o plano de fundo dessa imagem é parcialmente gerado por IA!</a>
			</div>
		</div>
	</div>
);