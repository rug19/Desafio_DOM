// "name": "Tonya Ritchie",
// "email": "Jasmin84@yahoo.com",
// "address": "12700 Renner Pine",
// "city": "Cathrynland",
// "state": "KS",
// "cep": "21734-8270",
// "phoneNumber": "808-948-6506"

const info_clientes = "../clientes.json"

lerBaseDeDados = async () => {
    return await fetch(info_clientes)
    .then((resultado) => resultado.json())
    .then((data) => data)
    .catch((error) => {
        console.error("lerBaseDeDados: ", error)
        return []
    });
}

let clientes = lerBaseDeDados()

addClientesTable = async (dados) => {
    const infor = await dados;

    console.log("infor ", infor)

    let layout_tr = ``

    await infor.forEach( async (cliente, i) => {
        layout_tr += 
        `
        <tr>
        <th scope="row">${i}</th>
        <td>${cliente.name}</td>
        <td>${cliente.email}</td>
        <td>${cliente.address}</td>
        <td>${cliente.city}</td>
        <td>${cliente.state}</td>
        <td>${cliente.cep}</td>
        <td>${cliente.phoneNumber}</td>
        <td>
            <button id="edita-${i}" onclick="editar(this)" type="button" class="btn btn-primary">Editar</button>

            <button id="deletar-${i}" onclick="deletar(this)" type="button" class="btn btn-danger">Deletar</button>
        </td>
      </tr>
       `
    })

    console.log(layout_tr)

    document.querySelector("tbody").innerHTML = layout_tr;
}
addClientesTable(clientes)