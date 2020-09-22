import React from 'react';
import { Layout } from '../components/Layout';
import { ReturnModal } from '../components/ReturnModal';
import { Player } from '../components/Player';
import { PodcastImage } from '../components/PodcastImage';
import Error from './_error';
import PodcastPlayer from '../components/PodcastPlayer';

export default function Podcast({ podcast = {}, statusCode }) {
    if (statusCode !== 200) {
        return <Error statusCode={statusCode} />;
    }
    return (
        <Layout title={podcast.title}>
            <ReturnModal id={podcast.channel.id}>
                <PodcastImage
                    image={podcast.urls.image}
                    image2={podcast.channel.urls.logo_image.original}
                />
                <Player
                    title={podcast.title}
                    userName={podcast.channel.title}
                    audio={podcast.urls.high_mp3}
                />
            </ReturnModal>
            <style jsx>{``}</style>
        </Layout>
    );
}

export async function getServerSideProps({ query: { id }, res }) {
    try {
        const request = await fetch(
            `https://api.audioboom.com/audio_clips/${id}.mp3`
        );

        if (request.status >= 400) {
            res.statusCode = request.status;
            return { props: { podcast: null, statusCode: 404 } };
        }
        const data = await request.json();
        const podcast = data.body.audio_clip;
        return { props: { podcast, statusCode: 200 } };
    } catch (err) {
        return {
            props: {
                podcast: null,
                statusCode: 503,
            },
        };
    }
}
