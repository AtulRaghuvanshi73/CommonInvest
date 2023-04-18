import { setGlobalState } from "../store"
const Hero = () => {
  return (

        <div className="text-center bg-white text-gray-800 py-24 px-6">

        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">A place to bring your projects to life!</span>
        <br />
        <span className="uppercase text-blue-400">CommonInvest. </span>
        </h1>


        <div className="flex justify-center items-center space-x-2">

        <button type='button'
        className='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700' 
        onClick={() => setGlobalState('createModal', 'scale-100')}
        >
        Add Project</button>

        <button type='button'
        className='inline-block px-6 py-2.5 border border-blue-400 font-medium text-xs leading-tight uppercase text-blue-500 rounded-full shadow-md bg-transparent hover:bg-blue-700 hover:text-white'>
        Support Project</button>
        </div>

        <div className="flex justify-center items-center mt-10">
            <div 
            className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                <span className="text-lg font-bold text-blue-900 leading-5">{0}</span>
                <span>Projects</span>
            </div>
            <div 
            className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                <span className="text-lg font-bold text-blue-900 leading-5">{0}</span>
                <span>Support</span>
            </div>
            <div 
            className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                <span className="text-lg font-bold text-blue-900 leading-5">{0}ETH</span>
                <span>Donated</span>
            </div>
        </div>
     </div>

  )
}

export default Hero