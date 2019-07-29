// pages/about.js

import Layout from '../components/MyLayout';

export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    );
}


// Mehtod 1
/*const Page = () => <p>This is the about page</p>;

export default withLayout(Page);*/

// Mehtod 2
/*const aboutPageContent = <p>This is the about page</p>;

export default function About() {
    return <Layout content={aboutPageContent} />;
}*/