import Link from 'next/link';
export const ReturnModal = ({ id, children }) => (
    <>
        <div className="modal">
            <div className="podcast">
                <nav>
                    <Link href={`/channel?id=${id}`}>
                        <a className="close">&lt; Volver</a>
                    </Link>
                </nav>
                {children}
            </div>
        </div>
        <style>
            {`
                nav {
                    background: none;
                }
                nav a {
                    display: inline-block;
                    padding: 15px;
                    color: white;
                    cursor: pointer;
                    text-decoration: none;

                }
                .podcast {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    background: #8756ca;
                    color: white;
                }
                
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 99999;
                }
                `}
        </style>
    </>
);
