import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Show',
        href: '/users',
    },
];

export default function Edit({ user }) {

  
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Show" />

            <div className='p-3'>
                 <Link  href={route('users.index')}
                    className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700'>
                    Back
                </Link>
            </div>

            <div>
                <p><strong>Name:</strong>{user.name}</p>
                <p><strong>Email:</strong>{user.email}</p>
            </div>
           
        </AppLayout>
    );
}
