import React from 'react'

function Modal({ children, isOpen, onClose, title }) {
    if(!isOpen) return null;
    return (
        <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20'>
            <div className='relative p-4 w-full max-w-2xl max-h-full'>
                <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700'>
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
                        <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                            {title}
                        </h3>

                        <button
                            type="button"
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={onClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="w-6 h-6 text-gray-300 hover:text-gray-400 cursor-pointer"
                                fill="currentColor"
                            >
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L160 301.3 54.63 406.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L114.8 256 9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 256 310.6 361.4z" />
                            </svg>

                        </button>
                    </div>
                    <div className='p-4 md:p-5 space-y-4'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal