import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../components/AppShell'), {
  ssr: false,
});

export async function generateStaticParams() {
  return [
    // authenticate
    { all: ['home'] },
    { all: ['apps'] },
    { all: ['activity'] },
    { all: ['settings'] },
    // unauthenticate
    { all: ['welcome'] },
    { all: ['create'] },
  ];
}

export default function Page() {
  return <App />;
}
