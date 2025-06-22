import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Role Show',
        href: '/roles',
    },
];

export default function Show({role,permissions}) {

    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Role Show" />

            <div className='p-3'>
                 <Link  href={route('roles.index')}
                    className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700'>
                    Back
                </Link>

                <div>
                    <p><strong>Name:</strong>{role.name}</p>
                    <p><strong>Permissions:</strong></p>
                    {permissions.map((permission)=>
                    <span key="1" 
                    className='mr-1 bg-green-100 text-green-800 text-xs font-medium'>
                        {permission}
                    </span>
                    )}
                </div>
            </div>
           
        </AppLayout>
    );
}
