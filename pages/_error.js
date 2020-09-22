import React from 'react';
import { Layout } from '../components/Layout';
import Link from 'next/link';

const Error = ({ statusCode }) => {
    return (
        <Layout title="Oh no 😕">
            <div className="message">
                {statusCode === 404 ? (
                    <>
                        <h1>Esta página no existe</h1>
                        <p>
                            <Link href="/">
                                <a>Volver a la Home</a>
                            </Link>
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Hubo Un problema</h1>
                        <p>Intenta de Nuevo más tarde</p>
                    </>
                )}
            </div>
            <style jsx>{`
                .message {
                    padding: 100px 30px;
                    text-align: center;
                }
                h1 {
                    margin-bottom: 2em;
                }
                a {
                    color: #8756ca;
                }
            `}</style>
        </Layout>
    );
};

export async function getServerSideProps({ err, res }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { props: { statusCode } };
}

export default Error;
