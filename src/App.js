// import './App.css';
import Profile from "./components/ProfileProject/Profile/Profile";
import Statistics from "./components/StatisticsProject/Statistics/Statistics";
import FriendList from "./components/FriendListProject/FriendList/FriendList";
import Transactions from "./components/TransactionsProject/Transactions/Transactions";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Profile />
      <Statistics />
      <FriendList />
      <Transactions />
    </div>
  );
}

export default App;
