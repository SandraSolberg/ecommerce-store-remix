const SkeletonCard = () => {
  return (
    <div className=' animate-pulse w-48 min-h-[24.8rem]  bg-slate-50 m-2 p-2 rounded-lg flex flex-col justify-between shadow hover:shadow-md'>
      <div>
        <div className='w-full  bg-slate-200 h-40 rounded-t-lg ' />
        <div>
          <div className='h-5 m-2 bg-slate-200 rounded col-span-1'></div>
        </div>
      </div>

      <div className='p-2'>
        <div className='space-y-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-3 bg-slate-200 rounded col-span-1'></div>
          </div>
          <div className='h-3 bg-slate-200 rounded'></div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-3 bg-slate-200 rounded col-span-1'></div>
          </div>
        </div>
      </div>

      <div className='h-10 m-2 animate-pulse bg-slate-200 rounded flex space-x-4'></div>
    </div>
  );
};

export default SkeletonCard;
