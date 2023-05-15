import { inter } from '@/lib/fonts';
import { sitemetadata } from '@/lib/site';
import { LayoutProps } from '@/types/layout';
import '@/app/styles.css';

export const metadata = { ...sitemetadata };

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
