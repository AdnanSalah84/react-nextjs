/*import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};

export default Page;*/

/*const Content = () => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Page;*/

import Layout from '../components/MyLayout.js'
import loadDB from '../lib/load-db'

function Post({ item }) {
    return (
        <Layout>
            <h1>{item.title}</h1>
            <p>
                URL:{' '}
                <a target="_blank" href={item.url}>
                    {item.url}
                </a>
            </p>
        </Layout>
    )
}

Post.getInitialProps = async function ({ query }) {
    const db = await loadDB()
    let item = await db
        .child('item')
        .child(query.id)
        .once('value')
    item = item.val()

    return { item }
}

export default Post