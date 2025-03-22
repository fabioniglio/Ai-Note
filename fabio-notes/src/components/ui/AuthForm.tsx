"use client"

import {useRouter} from 'next/navigation';
import { toast } from 'sonner';
import { CardContent } from './card';

type Props = {
    type: "login" | "register"
}

function AuthForm({ type }: Props) {


    const isLoginForm = type === "login"

    const router = useRouter();
    
    const handleSubmit = (formData: FormData) => {

        console.log('form Submitted');
    }

    return <form action={handleSubmit}>
        <CardContent>
            <div>
                
            </div>
        </CardContent>
    </form>
}

export default AuthForm
