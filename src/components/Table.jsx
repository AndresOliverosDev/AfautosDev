const Table = () => {

    const data = [
        { idPed: "00001", cliente: "Andres Oliveros", compra: "0001", fecha: "12/02/2021", estado: "Pendiente"},
        { idPed: "00002", cliente: "Rene Descartes", compra: "0002", fecha: "24/09/2023", estado: "Pendiente"},
        { idPed: "00003", cliente: "Søren Kierkegaard", compra: "0003", fecha:"12/02/2021", estado: "En proceso"},
        { idPed: "00004", cliente: "Friedrich Nietzsche", compra: "0004", fecha:"01/02/2022", estado: "Entregado"},
        { idPed: "00001", cliente: "Andres Oliveros", compra: "0001", fecha: "12/02/2021", estado: "Pendiente"},
        { idPed: "00002", cliente: "Rene Descartes", compra: "0002", fecha: "24/09/2023", estado: "Pendiente"},
        { idPed: "00003", cliente: "Søren Kierkegaard", compra: "0003", fecha:"12/02/2021", estado: "En proceso"},
        { idPed: "00004", cliente: "Friedrich Nietzsche", compra: "0004", fecha:"01/02/2022", estado: "Entregado"},
        { idPed: "00001", cliente: "Andres Oliveros", compra: "0001", fecha: "12/02/2021", estado: "Pendiente"}
    ]

    return(

        <div className="flex justify-center h-full overflow-auto p-5">
	        <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                            <tr>
                                <th className="p-3">Cliente</th>
                                <th className="p-3 text-left">Id Pedido</th>
                                <th className="p-3 text-left">Compra</th>
                                <th className="p-3 text-left">Fecha</th>
                                <th className="p-3 text-left">Estados</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => {
                                return(
                                <tr key={key} className="bg-gray-800">
                                    <td className='p-3'>
                                        <div className="flex align-items-center">
                                            <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
                                            <div className="ml-3">
                                                <div className="">{val.cliente}</div>
                                                <div className="text-gray-500">mail@gmail.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        {val.idPed}
                                    </td>
                                    <td className="p-3">
                                        {val.compra}
                                    </td>
                                    <td className="p-3 font-bold">
                                        {val.fecha}
                                    </td>
                                    <td className="p-3 font-bold">
                                        {val.estado}
                                    </td>
                                    <td className="p-3">
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                            <i className="material-icons-outlined text-base">edit</i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
</div>
)
};
export default Table;