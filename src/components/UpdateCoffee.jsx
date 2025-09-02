import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const handleUpdateCoffee = e =>{
        e.preventDefault();
    }

    return (
        <div>
             <div className='p-24'>
         <div className='p-12 text-center space-y-4'>
            <h1 className='text-6xl '>Update Coffee</h1>
        </div>

        <form onSubmit={handleUpdateCoffee}>

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

        <input type="submit" className='btn w-full' value="Update Coffee" />
        </form>


       </div>
        </div>
    );
};

export default UpdateCoffee;