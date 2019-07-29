// pages/index.js

import Layout from '../components/MyLayout';
import Link from 'next/link';

// export default function Index() {
//     return (
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     );
// }

// Mehtod 1

/*const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);*/

// Mehtod 2

/*const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
    return <Layout content={indexPageContent} />;
}*/

const PostLink = props => (
    <li>
        {/* <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link> */}
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {/* <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" /> */}
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    );
}