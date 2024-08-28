const Welcome = () => {
  return (
    <div className='flex flex-1 flex-col text-center justify-center items-center'>
      <h1 className='text-3xl text-blue-900'>Welcome to TacoShop</h1>
      <p className='text-xl text-blue-900'>
        Please log in or create a new account to get started.
      </p>
      <img
        className='w-auto h-auto max-w-[29.5rem] h-w-[29.5rem]'
        src='/images/eco-shopping-rafiki.svg'
        alt={`Go to dashboard`}
      />
    </div>
  );
};

export default Welcome;
