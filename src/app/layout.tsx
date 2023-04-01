// Base Layout
import './globals.css';
import Header from '@/components/Header';
import ReduxWrapper from '@/components/ReduxWrapper';

export const metadata = {
  title: 'Hassan Ali Khan',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReduxWrapper>
          <div className='z-0 box-border flex min-h-screen flex-col'>
            <div>
              <Header />
            </div>
            <div className='flex-grow'>{children}</div>
          </div>
        </ReduxWrapper>
      </body>
    </html>
  );
}
