function CatCard({ imagen, nombre }) {
    return (
        <div className="flex flex-col gap-3 pb-3">
            <div
                style={{
                    backgroundImage: `url(${imagen})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    minHeight: '200px',
                    maxWidth: '200px',
                }}
            >
            </div>
            <p className="text-[#111418] text-base font-medium leading-normal" style={{ textAlign: 'center' }}>
                {nombre}
            </p>
        </div>
    );
}

function MenuPage() {
    const p = [
        {
            "nombre": "Restaurante",
            "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d2/ec/33/piccola-italia.jpg?w=200&h=200s=1"
        },
        {
            "nombre": "Atracción Cultural",
            "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/a7/53/virgen-a-orillas-del.jpg?w=500&h=400&s=1"
        },
        {
            "nombre": "Museos",
            "imagen": "https://i0.wp.com/encarnacion.gov.py/wp-content/uploads/2022/11/MUSEO-MEMORIA-VIVA-25.jpg?resize=1024%2C683&ssl=1"
        },
        {
            "nombre": "Clubes Nocturnos",
            "imagen": "https://visitaparaguay.com.py/uploads/859-13.webp"
        },
        {
            "nombre": "Playas",
            "imagen": "https://i1.sndcdn.com/artworks-RiYk0jvta1eqJ2sj-bVKWJA-t500x500.jpg"
        }
    ];

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {
                p.map((cat, index) => (
                    <CatCard key={index} imagen={cat.imagen} nombre={cat.nombre} />
                ))
            }
        </div>
    );
}

export default MenuPage;