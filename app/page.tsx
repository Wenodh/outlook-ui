import Image from 'next/image';
import Navbar from '../components/Navbar';
import MessageBox from '../components/MessageBox';

export default function Home() {
    return (
        <div className='h-full'>
            <MessageBox />
        </div>
    );
}
