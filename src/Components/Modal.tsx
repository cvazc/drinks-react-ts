import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function Modal() {
    const {modal, closeModal} = useAppStore()

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="my-5 text-4xl font-extrabold text-center text-gray-900"
                                    >
                                        Titulo Aquí
                                    </Dialog.Title>
                                    <Dialog.Title
                                        as="h3"
                                        className="my-5 text-2xl font-extrabold text-gray-900"
                                    >
                                        Ingredientes y Cantidades
                                    </Dialog.Title>
                                    <Dialog.Title
                                        as="h3"
                                        className="my-5 text-2xl font-extrabold text-gray-900"
                                    >
                                        Instrucciones
                                    </Dialog.Title>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
