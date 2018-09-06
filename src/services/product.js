export default function fetchProducts() {
    return fetch(`${API_HOST}/products`).then((response) => {
        return response.json().then((json) => {
            return json;
        });
    });
}