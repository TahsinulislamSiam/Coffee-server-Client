import React from 'react';
import Swal from 'sweetalert2';


const AddCoffee = () => {

    const handleCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee= Object.fromEntries(formData.entries())
        console.log(newCoffee);


        //send data to the Database
        fetch('http://localhost:3000/coffees' , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
               console.log('added successfully')
                Swal.fire({
                title: "Coffee Added!",
                icon: "success",
                confirmButtonText: "ok"
         });

               form.reset();
         }

      })
        
    }

    return (
       <div className='p-24'>
         <div className='p-12 text-center space-y-4'>
            <h1 className='text-6xl '>Add new Coffee</h1>
            <p className='text-gray-400'>Welcome to Coffee Haven, your one-stop destination for freshly brewed coffee and handcrafted beverages. Our coffee store is built with passion for quality, serving rich flavors sourced from the finest coffee beans around the world</p>
        </div>

        <form onSubmit={handleCoffee}>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Name</label>
           <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Chef</label>
           <input type="text" name='chef' className="input w-full" placeholder="Enter Chef Name" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Supplier</label>
           <input type="text" name='supplier' className="input w-full" placeholder="Enter supplier Name" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Taste</label>
           <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee taste" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Category</label>
           <input type="text" name='category' className="input w-full" placeholder="Enter Coffee Category" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
           <label className="label">Details</label>
           <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
        </fieldset>
    
            </div>

             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
           <label className="label">Photo</label>
           <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
        </fieldset>

        <input type="submit" className='btn w-full' value="Add Coffee" />
        </form>


       </div>
    );
};

export default AddCoffee;