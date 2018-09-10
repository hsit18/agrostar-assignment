export default function fetchProducts() {
    return fetch('https://www.mocky.io/v2/5b3de5ed310000db1f6de257').then((response) => {
        return response.json().then((json) => {
            return json;
        });
    });
}