import React from 'react';
import { Layout } from '../components/Layout';
import { ChannelGrid } from '../components/ChannelGrid';
import Error from 'next/error';
const Index = ({ channels = [], statusCode }) => {
    if (statusCode !== 200) {
        return <Error statusCode={statusCode} />;
    }
    return (
        <Layout title="Podcast">
            <ChannelGrid channels={channels} />
        </Layout>
    );
};

export async function getServerSideProps({ res }) {
    try {
        const req = await fetch(
            'https://api.audioboom.com/channels/recommended'
        );
        const { body: channels } = await req.json();
        return { props: { channels, statusCode: 200 } };
    } catch (err) {
        res.statusCode = 503;
        return { props: { statusCode: 503 } };
    }
}

export default Index;
