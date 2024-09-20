export const Cart = (props) => {
    const added = () => {
                const Confirm = confirm(`Please confirm ${props.item} ${props.name} order`)
                if (Confirm) {
            alert("Order confirmed")
        } else {
            alert("Order cancled")
        }
    }
return (
    <>
        <div className="flex justify-center rounded-md items-center border h-auto my-5 w-auto px-5 max-h-96">
            <div>
                <img className="rounded" src={props.img} alt="" />
            </div>
            <div className="border border-transparent mx-3 h-full py-8">
                <h1 className="text-center text-2xl" >{props.name} </h1>
                <p className="my-3">Values : {props.values}</p>
                <p className="my-3">Items: {props.item} </p>
                <p className="my-3">Total: {props.values * props.item}</p>
                <button className="border rounded px-2 bg-teal-700 outline-none w-28 border-black hover:border-white cursor-pointer py-2" onClick={added} >BUY NOW</button>
            </div>
        </div>
    </>
)
}