import React, { use } from 'react';
import { NavLink } from 'react-router';

const Categories = fetch('/categories.json').then(res => res.json());

const AllCategory = () => {
    const allCategories = use(Categories);
    return (
        <div>
            <div className='p-2'>
                <h1 className='font-semibold text-primary text-xl mb-4'>All Categories  (<span className='text-secondary'>{allCategories.length}</span>)</h1>
                <div className='grid grid-cols-1 *:btn'>
                    {
                        allCategories.map(x => <NavLink className={"text-accent hover:bg-base-300"} to={`/category/${x.id}`} key={x.id}>{x.name}</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCategory;