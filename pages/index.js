// pages/index.js

import Layout from '../components/MyLayout';

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

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
    return <Layout content={indexPageContent} />;
}