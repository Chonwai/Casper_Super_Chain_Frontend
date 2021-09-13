import React from 'react';
import { useFormik } from 'formik';
import useAxios from 'axios-hooks';
import { useToast } from '@chakra-ui/react';
import ContactView from './ContactView';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ContactContainer() {
    const toast = useToast();
    const [{ data, loading, error, response }, execute] = useAxios(
        { url: `${baseURL}/api/v1/auth/register/marketing` },
        { manual: true }
    );
    const formik = useFormik({
        initialValues: {
            name: '',
            phone_number: '',
            email: '',
            role: 'customer',
            description: '',
        },
        onSubmit: async (values) => {
            try {
                const res = await execute({
                    data: values,
                    url: `${baseURL}/api/v1/auth/register/marketing`,
                    method: 'POST',
                });
                if (res.data.status === 'success') {
                    toast({
                        title: 'Contact Success!',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 5000,
                        position: 'top-right',
                        isClosable: true,
                    });
                }
            } catch (error) {
                toast({
                    title: 'Contact Fail!',
                    description: "We've created your account for you.",
                    status: 'error',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                });
            }
        },
    });
    return <ContactView {...formik} />;
}
