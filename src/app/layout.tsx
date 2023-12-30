import { inter } from '@/lib/fonts';
import { LayoutProps } from '@/types/layout';
import '@/app/styles.css';

export default function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex h-full w-full flex-col">
          <div className="h-full w-full flex-1 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
