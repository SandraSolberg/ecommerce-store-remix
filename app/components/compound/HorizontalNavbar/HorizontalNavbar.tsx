import { Form, Link, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import SVGIcon from '~/components/atom/SVGIcon/SVGIcon';
import ContentMenu from '../ContentMenu/ContentMenu';
import { User } from '~/types/types';
import LinkButton from '~/components/atom/LinkButton/LinkButton';

type UserData = {
  user: User | null;
};

const HorizontalNavbar = () => {
  const data: UserData = useLoaderData();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between bg-white border-t border-border-divider px-8 py-4 relative'>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center font-semibold gap-2 px-3 py-1 rounded-full border-2 text-blue-800 ${
              open ? 'border-blue-600' : 'border-transparent'
            }  hover:border-blue-600`}
          >
            <SVGIcon
              stroke={'var(--color-blue-080)'}
              fill={open ? 'var(--color-blue-080)' : 'none'}
            >
              <>
                <rect x='3' y='3' width='7' height='7'></rect>
                <rect x='14' y='3' width='7' height='7'></rect>
                <rect x='14' y='14' width='7' height='7'></rect>
                <rect x='3' y='14' width='7' height='7'></rect>
              </>
            </SVGIcon>
            Categories
            <SVGIcon stroke={'var(--color-blue-060)'}>
              {open ? <path d='M18 15l-6-6-6 6' /> : <path d='M6 9l6 6 6-6' />}
            </SVGIcon>
          </button>
        </div>

        <div>
          {data?.user ? (
            <div className='flex items-center gap-2'>
              <p className=''>{`${data?.user?.profile?.firstName} ${data?.user?.profile?.lastName} `}</p>
              <Form action='/logout' method='post'>
                <LinkButton
                  title='Sign out'
                  type='submit'
                  className='md:text-lg'
                />
              </Form>
            </div>
          ) : (
            <Link to='/login'>Sign in</Link>
          )}
        </div>
      </nav>
      {open && <ContentMenu />}
    </>
  );
};

export default HorizontalNavbar;
