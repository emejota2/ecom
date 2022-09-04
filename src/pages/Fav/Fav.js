import React, { useContext } from 'react'
import CardFav from '../../components/CardFav/CardFav';
import { Context } from '../../Store/Store';

const Fav = () => {
    const {favoritos} = useContext(Context);
  

    return (
      <>
      
      <div className="container d-flex justify-content-around flex-wrap mt-5">
        {favoritos.length > 0 ? (
          favoritos.map((vape) => (
            <CardFav
              key={vape.id}
              vape={vape}
              {...vape}
            />
          ))
        ) : (
          <p className="  ">No ha agregado una pelicula favorita</p>
        )}
        
      </div>
      </>
    );
}

export default Fav