import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpensesItem = (itemData) => {
    return <ExpenseItem {...itemData.item} />
}

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList data={expenses} renderItem={renderExpensesItem} keyExtractor={(item) => item.id} />
    )
}

export default ExpensesList;