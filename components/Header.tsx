'use client';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { IoMenuOutline } from 'react-icons/io5';
import { useAtom } from 'jotai';
import { menuAtom } from '@/app/store';

type Props = {};

const items = ['Home', 'View', 'Help'];

const Header = (props: Props) => {
    const [activeItem, setActiveItem] = useState('Home');
    const [menu, setMenu] = useAtom(menuAtom);
    function toggleMenu() {
        setMenu(!menu);
    }
    return (
        <section className="flex flex-col items-center gap-2 bg-gray-200/80 px-2 pb-1">
            <div className="flex items-center gap-3 w-full">
                <button
                    className="px-2 py-2 hover:bg-gray-300"
                    onClick={toggleMenu}
                >
                    <IoMenuOutline className="text-2xl text-gray-500" />
                </button>

                {items.map((d, i) => (
                    <button
                        onClick={() => setActiveItem(d)}
                        key={i}
                        className={cn(
                            'border-b-2 border-transparent p-2 text-sm transition-all hover:bg-gray-300',
                            {
                                'border-blue-500': activeItem === d,
                            }
                        )}
                    >
                        {d}
                    </button>
                ))}
            </div>
            <div className="border bg-white shadow py-2 px-4 w-full rounded-md">
                {activeItem}
            </div>
        </section>
    );
};

export default Header;
