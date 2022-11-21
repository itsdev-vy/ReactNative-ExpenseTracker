import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-b2200-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
    const response = await axios.post(
        `${BACKEND_URL}/expenses.json`,
        expenseData
    );
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);

    const expenses = [];
    console.log("🚀 ~ file: http.js ~ line 16 ~ fetchExpenses ~ expenses", response.data)
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
}

export async function updateExpense(id, expenseData) {
    axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}


export async function deleteExpense(id) {

}