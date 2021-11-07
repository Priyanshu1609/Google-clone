import { useRouter } from 'next/router'
import Link  from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;


    return (
        <di className="flex max-w-lg justify-between text-blue-700 mb-18">
             {startIndex >= 10 && (<Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} passHref>
                <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
                    <ChevronLeftIcon className="h-6 text-blue-500" />
                    <p>Previous</p>
                </div>
            </Link>)}

            <div>
                <p>{startIndex/10}</p>
            </div>
            
            <Link href={`/search?term=${router.query.term}&start=${startIndex +10}`} passHref>
                <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">     
                <ChevronRightIcon className="h-6 text-blue-500"/>
                    <p>Next</p>
            
                </div>
            </Link> 
            
        </di>
    )
}

export default PaginationButtons
