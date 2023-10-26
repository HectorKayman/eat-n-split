// Sample Data
const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance === 0 && <p>You & {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}&euro;
        </p>
      )}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👩🏻‍🤝‍🧑🏽 Friend&apos;s name</label>
      <input type="text" id="friend-name" />

      <label htmlFor="image-url">🖼 Image URL</label>
      <input type="text" id="image-url" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="bill-value">💰 Bill Value</label>
      <input type="number" id="bill-value" />

      <label htmlFor="exp">🧍 Your expense</label>
      <input type="number" id="exp" />

      <label htmlFor="friend-exp">👩🏻‍🤝‍🧑🏽 X&apos;s expense</label>
      <input type="number" id="friend-exp" disabled />

      <label htmlFor="payer">🤑 Who is paying the bill?</label>
      <select name="payer" id="payer">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
