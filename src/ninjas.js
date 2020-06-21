import React from 'react';

const Ninjas =(props) =>{
        // //console.log(this.props);
         const {ninjas, deleteNinja} = props;
      
        // // or const ninjas = this.props.ninjas;
        // const ninjalist = ninjas.map(ninja =>{
        //     if(ninja.age > 20){
        //     return (
        //         <div className="ninja" key={ninja.id}>
        //             <div>Name: {ninja.name}</div>
        //             <div>Age: {ninja.age}</div>
        //             <div>Belt: {ninja.belt}</div>
        //         </div>
        //     )
        //   } else {
        //            return null; 
        //          }
        // })

        const ninjalist = ninjas.map(ninja =>{
            // condition ? (true):(false)
           return ninja.age >20 ? (
                <div className="ninja" key={ninja.id}>
                  <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                   <div>Belt: {ninja.belt}</div>
                   <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            ) : null;
        })
        return (
            <div className="ninja-list">
                {ninjalist}
            </div>
        )
    
}

export default Ninjas