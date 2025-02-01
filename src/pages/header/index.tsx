export  default function Header() {
return (
    <div className=" w-full bg-black h-16 flex items-center justify-between px-10 sticky top-0">
        <h1>Products</h1>
        <div className="flex items-center border-white border w-[379px] h-10 rounded-lg px-7">

        <input type="text" className=" outline-none placeholder:text-white placeholder:text-sm" placeholder="Search here" />
        </div>
    </div>
)
}