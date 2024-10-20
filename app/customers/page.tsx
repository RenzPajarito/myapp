'use client'

import { get, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from '@/lib/firebase/firebase';

interface User {
    id: string;
    [key: string]: any;
}

export default function Customers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const usersRef = ref(database, 'users');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => {
                    if (typeof data === 'object' && data !== null) {
                        return {
                            id,
                            ...data,
                        };
                    } else {
                        console.warn(`Unexpected data type for user with ID: ${id}`);
                        return { id };
                    }
                });
                setUsers(usersArray as User[]);
            } else {
                console.log('No data available.');
            }
        }).catch((error) => {
            console.error(error)
        });
    }, []);

    return (
        <>
            <div>
                <h1>Customers Page</h1>
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}