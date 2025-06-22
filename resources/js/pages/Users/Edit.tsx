import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Edit',
        href: '/users',
    },
];

export default function Edit({ user }) {

    const {data,setData,errors,put} = useForm({
        name:user.name || "",
        email:user.email || "",
        password:""
    });

    function submit(e){
        e.preventDefault();
        put(route('users.update', user.id));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Update" />

            <div className='p-3'>
                 <Link  href={route('users.index')}
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
                         placeholder='enter your name'
                          />
                          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                    </div>

                    <div className='grid-gap-2'>
                        <label for="email" className='text-sm leading-none font-medium select-none '>
                            Email
                        </label>

                        <input
                         type="email"
                         id="email"
                         value={data.email}
                         onChange={(e)=>setData("email",e.target.value)}
                         name="email"
                         className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
                         placeholder='enter your email'
                          />
                          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>
                    <div className='grid-gap-2'>
                        <label for="password" className='text-sm leading-none font-medium select-none '>
                            Password
                        </label>

                        <input
                         type="password"
                         id="password"
                         value={data.password}
                         onChange={(e)=>setData("password",e.target.value)}
                         name="password"
                         className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
                         placeholder='enter your password'
                          />
                          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                    </div>

                    <button type="submit" className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4'>Submit</button>
                </form>
            </div>
           
        </AppLayout>
    );
}
