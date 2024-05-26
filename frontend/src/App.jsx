import axios from 'axios'
import { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
function App() {
  const [first, setfirst] = useState()
  const {register,handleSubmit}=useForm()
  const [isVisible, setisVisible] = useState('true') 
  useEffect(() => {
    const timer = setTimeout(()=>{
      setisVisible(false);
    },3000)
    return () => clearTimeout(timer);
  }, [])
  const onSubmit =  async (data) => {
    try {
      const res = await axios.post('/api/register',data);
      setfirst(res.data);
      console.log(res.data)
    } catch (error) {
      console.log(error);
      setfirst(error.message);
      
    }
  };

  return (
    <>
      <header className="bg-green-500 rounded-2xl text-center h-20 p-4 text-zinc-50 font-bold underline decoration-4 text-3xl">
        Basic Fullstack
      </header>
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Enter Details to save</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="w-full px-3 py-2 border rounded-md mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border rounded-md mt-1"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
    {first && isVisible && (<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-md mb-4 text-center font ml-96 mr-96">
  {first}
</div>)}

    </>
  )
}

export default App