import React from 'react';

const Blog = () => {
    return (
        <div className="bg-[url('blog.png')] min-h-screen bg-no-repeat bg-fixed bg-cover rounded-md">
            <div className='flex justify-center items-center p-8'>
                <div>
                    <div>
                        <h2 className='text-2xl font-bold'>1. What is the differences between uncontrolled and controlled components?</h2>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'><span className='text-orange-600'>ANS:</span> In software engineering, the terms "uncontrolled" and "controlled" components refer to different types of components in a system. Uncontrolled components are typically user interface elements that are managed by the browser or operating system, and which are not directly controlled by the application code. Examples of uncontrolled components include native HTML form elements like input fields and select dropdowns. With uncontrolled components, the values are stored in the DOM, and retrieved via the DOM API.</p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-bold'>2. How to validate React props using PropTypes?</h2>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'><span className='text-orange-600'>ANS:</span>shape of props that a component should receive. This can help prevent errors and make your code more reliable.</p>
                        <div className='pl-4'>
                            <p className='text-gray-800 font-semibold pl-4 mt-4'>First, install the PropTypes package by running the following command in your terminal:</p>
                            <p className='text-gray-800 font-semibold pl-4 mt-4'>Import PropTypes in your component:</p>
                            <p className='text-gray-800 font-semibold pl-4 mt-4'>Define the propTypes object in your component and specify the data type and shape of each prop:</p>
                            <p className='text-gray-800 font-semibold pl-4 mt-4'>Finally, if a prop does not match its corresponding PropTypes definition, React will log a warning to the console. This can help you catch errors early on.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-bold'>1. What is the difference between nodejs and express js?</h2>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'><span className='text-orange-600'>ANS:</span> Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It provides a runtime environment for building server-side applications using JavaScript, and includes a built-in set of modules for file system access, networking, and other system-level functionality.</p>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'>Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of features for building web applications and APIs, including routing, middleware, and templating. Express.js is designed to be lightweight, flexible, and easy to use, and it has become one of the most popular web frameworks for Node.js.</p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-bold'>1. What is a custom hook, and why will we create a custom hook??</h2>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'><span className='text-orange-600'>ANS:</span> In React, a custom hook is a JavaScript function that allows you to extract logic from a component and reuse it in other components. Custom hooks enable you to create reusable code that encapsulates a specific behavior or functionality.</p>
                        <p className='text-gray-800 font-semibold pl-4 mt-4'><span className='text-orange-600'>Why we use custom hook:</span> For example, if you find yourself writing the same code in multiple components, you can extract that code into a custom hook and reuse it across those components. Alternatively, if you have some complex state management or data fetching logic that you want to reuse in different parts of your application, you could create a custom hook to encapsulate that logic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;