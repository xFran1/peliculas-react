import {useEffect , useState} from 'react'


function Peliculas(){
    const [isLoading, setIsLoading] = useState(true);
    const [plsData,setplsData] =useState(null);

    const fetch_data = async () => {
        if(isLoading){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTJiYWJmMDVhY2ZkMmIwMzIyZmUwNTZkMWY1NGZhNCIsIm5iZiI6MTcyNzI0NjAwOS42NjI5NjUsInN1YiI6IjY2ZjNhZTFkM2E5NWE1YmNkYTIyZTg4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GA6vCApD2bm26fX9g3lcNyy6fGBurIk-IFy9a8A6Kl0'
                }
              };
                    
                
              await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
                .then(response => response.json())
                .then(data => setplsData(data),console.log(plsData),setIsLoading(false))
                .catch(err => console.error(err));

        }
        
    }

    useEffect(() => {
        fetch_data();
    },[isLoading])
    


            return plsData!==null ? (
                
                <div className="grid grid-cols-4 gap-y-5 ">

                 {plsData.results.map((item,index)=>
                    <div className="bg-red-400 w-48 text-center" key={index}>
                        <h1 >{item.title}</h1>
                        <div><img src= {`http://image.tmdb.org/t/p/w500${item.poster_path}`} /></div>
                        </div>
                )}
                </div>


            ) :
            (
                <div>Esperando...</div>
            )
        
        
       
  

      
    
  

}

export default Peliculas;