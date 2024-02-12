'use client';
import { menuAtom } from '@/app/store';
import { cn } from '@/utils/cn';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import {
    RiInboxLine,
    RiCalendar2Line,
    RiSettings2Line,
    RiContactsBookLine,
} from 'react-icons/ri';

type ItemType = {
    title: string;
    icon: React.ReactNode;
    items: {
        icon: React.ReactNode;
        name: string;
        slug: string;
    }[];
};

const sidebarData: ItemType[] = [
    {
        title: 'Main',
        icon: <RiInboxLine />,
        items: [
            {
                icon: <RiInboxLine />,
                name: 'Inbox',
                slug: 'inbox',
            },
            {
                icon: <RiCalendar2Line />,
                name: 'Calendar',
                slug: 'calendar',
            },
            {
                icon: <RiContactsBookLine />,
                name: 'Contacts',
                slug: 'contacts',
            },
        ],
    },
    {
        title: 'Settings',
        icon: <RiSettings2Line />,
        items: [
            {
                icon: <RiInboxLine />,
                name: 'Email Settings',
                slug: 'email-settings',
            },
            {
                icon: <RiCalendar2Line />,
                name: 'Calendar Settings',
                slug: 'calendar-settings',
            },
            {
                icon: <RiContactsBookLine />,
                name: 'Contacts Settings',
                slug: 'contacts-settings',
            },
        ],
    },
    {
        title: 'Folders',
        icon: <RiInboxLine />,
        items: [
            {
                icon: <RiInboxLine />,
                name: 'Important',
                slug: 'important',
            },
            {
                icon: <RiInboxLine />,
                name: 'Sent',
                slug: 'sent',
            },
            {
                icon: <RiInboxLine />,
                name: 'Drafts',
                slug: 'drafts',
            },
        ],
    },
    {
        title: 'More',
        icon: <RiSettings2Line />,
        items: [
            {
                icon: <RiInboxLine />,
                name: 'Archive',
                slug: 'archive',
            },
            {
                icon: <RiInboxLine />,
                name: 'Spam',
                slug: 'spam',
            },
        ],
    },
];

type Props = {};

function Sidebar({}: Props) {
    const [animationParent] = useAutoAnimate();
    const [menu] = useAtom(menuAtom);

    return (
        <div ref={animationParent}>
            {menu && (
                <div className="h-full min-w-[200px] px-2">
                    {sidebarData.map((d, i) => (
                        <Item key={i} {...{ ...d }} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Item(props: ItemType) {
    const [animationParent] = useAutoAnimate();
    const [isItemOpen, setItemOpen] = useState(false);
    const pathName = usePathname();
    function toggleItem() {
        setItemOpen(!isItemOpen);
    }
    return (
        <div ref={animationParent} className="py-2">
            <button
                className="flex items-center gap-2 w-full"
                onClick={toggleItem}
            >
                <IoIosArrowDown
                    className={cn('text-sm transition-all text-gray-400', {
                        '-rotate-90': !isItemOpen,
                    })}
                />
                <p>{props.title}</p>
            </button>
            {isItemOpen && (
                <div className="">
                    {props.items.map(({ icon: Icon, name, slug }, i) => (
                        <Link
                            key={i}
                            href={'/' + slug}
                            className={cn(
                                'flex p-2 hover:bg-blue-300 items-center gap-2 rounded text-gray-600 transition-all my-1',
                                {
                                    'bg-blue-300 ': '/' + slug == pathName,
                                }
                            )}
                        >
                            <div className="">{Icon}</div>
                            <p>{name}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Sidebar;
