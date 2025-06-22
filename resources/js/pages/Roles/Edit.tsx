import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Role Edit',
        href: '/roles',
    },
];

export default function Edit({role,rolePermissions,permissions}) {

    const {data,setData,errors,put} = useForm({
        name:role.name || "",
        permissions: rolePermissions || []
    });

    function submit(e){
        e.preventDefault();
        put(route('roles.update', role.id));
    }

    function handleCheckBoxChange(permissionName, checked){
        if(checked){
            setData("permissions", [...data.permissions,permissionName]);
        }else{
            setData("permissions",data.permissions.filter(name=>name !== permissionName));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Role Edit" />

            <div className='p-3'>
                 <Link  href={route('roles.index')}
                    className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700'>
                    Back
                </Link>

                <form onSubmit={submit} className='space-y-6 mt-4 max-w-md mx-auto'>
                    <div className='grid-gap-2'>
                        <label for="" className='text-sm leading-none font-medium select-none '>
                            Name
                        </label>

                        <input
                         type="text"
                         id="name"
                         value={data.name}
                         
                         onChange={(e)=>setData("name",e.target.value)}
                         name="name"
                         className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
                         placeholder='Enter role  name'
                          />
                          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                    </div>
                    <div className='grid-gap-2'>
                        <label for="" className='text-sm leading-none font-medium select-none '>
                            Permissions
                        </label>

                        {permissions.map((permission)=>
                        <label key={permission} className='flex items-center space-x-2'>
                            <input 
                            type="checkbox"
                            value={permission}
                            checked={data.permissions.includes(permission)}
                            id={permission}
                            onChange={(e)=>handleCheckBoxChange(permission, e.target.checked)}
                            className='form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 '
                               />
                               <span className='text-gray-800 capitalize'>{permission}</span>
                        </label>
                        )}

                       
                          {errors.permissions && <p className='text-red-500 text-sm mt-1'>{errors.permissions}</p>}
                    </div>

                    

                    <button type="submit" className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4'>Submit</button>
                </form>
            </div>
           
        </AppLayout>
    );
}
