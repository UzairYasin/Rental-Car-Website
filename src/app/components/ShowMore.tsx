"use client";
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '../../../types'
import { updateSearchParams } from '../../../utils';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {

        const newLimit = (pageNumber + 1) * 10;

        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName, {scroll:false});
    }

    return (
        <>
            <div className="w-full flex-center gap-5 mt-10">
                {!isNext && (
                    <CustomButton
                        title='Show More'
                        btnType='button'
                        containerStyles='bg-gradient-to-r from-violet-700 to-violet-800 text-white rounded-full mt-10'
                        handleClick={handleNavigation}
                    />
                )}
            </div>

        </>
    )
}

export default ShowMore
