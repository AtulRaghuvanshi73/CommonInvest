import AddButton from "../components/AddButton"


import Hero from "../components/Hero"
import Projects from "../components/Projects"

function Home() {
  return ( 
      <>
        <Hero />
        <Projects/>
        <div className="flex justify-center items-center my-5 "> 
        <button type='button'
        className='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700'>
          Load More</button>
        </div>

        
        <AddButton />
    </>
  )
}

export default Home