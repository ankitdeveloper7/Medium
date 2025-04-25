interface Props {
    username: string;
    heading: string;
    date: string
}
export const SideBlog = ({ username, heading, date }: Props) => {
    return (
        <>
            <div className="flex justify-center py-4">
                <div className="max-w-full">
                    <div className="text-sm font-[400] text-[#242424]">
                        <img className="inline-block size-6 rounded-full ring-2 ring-white mr-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                        {username}
                    </div>
                    <div className="text-xl min-w-sm text-[#242424] font-[700] cursor-pointer py-2">
                        {heading}
                    </div>
                    <div className="font-[400] text-sm text-[#6b6b6b] cursor-pointer">
                        {date}
                    </div>

                </div>
            </div>
        </>
    )
}