import MenuPage from "./MenuPage";
function InicioPage() {
    return (
        <div className="layout-container flex h-full grow flex-col bg-orange-400"> 
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="@container">
                        <div className="@[480px]:p-4">
                            <div
                                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/308627113_615498713409587_1030756637901598696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QLHuhrwSXVkQ7kNvgGEMqhT&_nc_ht=scontent-gru1-1.xx&oh=00_AYDU9CSJoTv3CnRnWSqTMUXMyxqP6OCwmvqXWKlu8ltDAA&oe=66A1AA53")'
                                }}
                            >

                                <div className="flex flex-col gap-2 text-center">
                                    <h1
                                        className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                    >Encarnación -  La Perla del Sur
                                    </h1>
                                    <h2
                                        className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                                        style={{ fontWeight: 'bolder' }}
                                    >
                                        ¡Explora nuestra guía turística y sumérgete en una aventura inolvidable!
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MenuPage/>
                </div>
            </div>
        </div>

    );
}

export default InicioPage;