import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function Index({users}) {

    function handleDelete(id){
        if(confirm("are you sure want to delete?")){
            router.delete(route('users.destroy',id));
        }

    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />

            <div className='p-3'>
                 <Link  href={route('users.create')}
                    className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700'>
                    Create
                </Link>
                <div className="overflow-x-auto">
                   <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700'>
                                <tr>
                                    <th scope="col" className='px-6 py-3'>Id</th>
                                    <th scope="col" className='px-6 py-3'>Name</th>
                                    <th scope="col" className='px-6 py-3'>Email</th>
                                    <th scope="col" className='px-6 py-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(({id,name,email})=>
                                <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-600'>
                                    <td className='px-6 py-3 font-medium text-gray-900 dark:text-white'>
                                        {id}
                                    </td>
                                    <td className='px-6 py-3 font-medium text-gray-300'>
                                        {name}
                                    </td>
                                    <td className='px-6 py-3 font-medium text-gray-300'>
                                        {email}
                                    </td>
                                    <td className='px-3 py-2 font-medium text-gray-300'>
                                       <Link href={route("users.edit",id)} className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700'>Edit</Link>

                                       <Link href={route("users.show",id)} className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-orange-700'>Show</Link>

                                       <button
                                       onClick={()=>handleDelete(id)}
                                        className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-500'>Delete</button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                   </table>
                </div>
            </div>
           
        </AppLayout>
    );
}
