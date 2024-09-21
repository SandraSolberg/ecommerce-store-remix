import { Form, Link, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import SVGIcon from '~/components/atom/SVGIcon/SVGIcon';
import ContentMenu from '../ContentMenu/ContentMenu';
import { User } from '~/types/types';
import LinkButton from '~/components/atom/LinkButton/LinkButton';
import useClickOutside from '~/hooks/useClickOutside';

type UserData = {
  user: User | null;
};

const HorizontalNavbar = () => {
  const data: UserData = useLoaderData();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const onHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const { ref, buttonRef } = useClickOutside(onClose, onHideDropdown);

  return (
    <>
      <nav className='flex items-center justify-between bg-white border-t border-border-divider px-8 py-4 relative'>
        <div>
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className={`flex items-center font-semibold gap-2 px-3 py-1 rounded-full border-2 text-blue-600 border-blue-600 hover:border-blue-600 hover:bg-blue-200`}
          >
            <SVGIcon
              stroke={'var(--color-blue-600)'}
              fill={open ? 'var(--color-blue-600)' : 'none'}
            >
              <>
                <rect x='3' y='3' width='7' height='7'></rect>
                <rect x='14' y='3' width='7' height='7'></rect>
                <rect x='14' y='14' width='7' height='7'></rect>
                <rect x='3' y='14' width='7' height='7'></rect>
              </>
            </SVGIcon>
            Categories
            <SVGIcon stroke={'var(--color-blue-600)'}>
              {open ? <path d='M18 15l-6-6-6 6' /> : <path d='M6 9l6 6 6-6' />}
            </SVGIcon>
          </button>
        </div>

        <div>
          {data?.user ? (
            <div className='flex items-center gap-2'>
              <p className='text-lg'>{`${data?.user?.profile?.firstName} ${data?.user?.profile?.lastName} `}</p>
              <Form action='/logout' method='post'>
                <LinkButton
                  title='Sign out'
                  type='submit'
                  className='md:text-lg'
                />
              </Form>
            </div>
          ) : (
            <Link to='/login' className='md:text-lg'>
              Sign in
            </Link>
          )}
        </div>
      </nav>
      <div ref={ref}>{open && <ContentMenu />}</div>
    </>
  );
};

export default HorizontalNavbar;
