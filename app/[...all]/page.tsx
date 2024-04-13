import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../components/app-shell'), {
  ssr: false,
});

export async function generateStaticParams() {
  return [
    // authenticate
    { all: ['home'] },
    { all: ['apps'] },
    { all: ['activity'] },
    // unauthenticate
    { all: ['welcome'] },
    { all: ['create'] },
  ];
}

export default function Page() {
  return <App />;
}
