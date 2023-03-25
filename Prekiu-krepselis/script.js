const data = [];

const showResult = () => {

    let result = '';

    data.map((product, index) => {
        result += `<tr>
                        <td>${product.item}</td>
                        <td>${product.qty}</td>
                        <td>
                            <button onclick="deleteItem(${index})" class="rounded btn btn-danger">Ištrinti</button>
                        </td>
                    </tr>`;
    });

    document.querySelector('tbody').innerHTML = result;
}

const deleteItem = (index) => {
    data.splice(index, 1);
    if(data.length === 0) {
        document.querySelector(".msg").textContent = 'Jūsų krepšelis yra tuščias';
        document.querySelector(".msg").style.display = 'block';
    }
    showResult();
}

const addResult = (event) => {
    event.preventDefault();

    if(document.querySelector('[name="item"]').value === '' || document.querySelector('[name="qty"]').value === '') {
        document.querySelector(".msg").textContent = 'Neįvestas pavadinimas arba kiekis';
        document.querySelector(".msg").style.display = 'block';
        return;
    }

    const product = {
        item: document.querySelector('[name="item"]').value,
        qty: document.querySelector('[name="qty"]').value
    }

    data[data.length] = product;

    document.querySelector('form').reset();

    if (data.length > 0) {
        document.querySelector(".msg").style = "display:none";
    }

    showResult();
}