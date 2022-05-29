import { FunctionComponent } from 'react';
import { Header } from '@/components';

type Props = {
  children: React.ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      {/* <>Footer</> */}
    </>
  );
};
