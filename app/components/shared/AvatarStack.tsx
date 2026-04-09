type Avatar = {
    id : number;
    image : string;
    alt?: string;
}

type AvatarStackProps = {
    users : Avatar[];
}

export default function AvatarStack({ users = [] }: AvatarStackProps) {
    return(
        <section className="flex items-center">
        {users.map((user, index)=>(
            <div key={user.id} className={`relative w-9 h-9 rounded-full border-1 border-white overflow-hidden ${index !== 0 ? "-ml-3" : ""}`}>
                <img src={user.image} alt={user.alt || "avatar"}
                className="w-full h-full object-cover"
                />
            </div>
        ))}

    </section>
    )
}