import type { NextPage } from "next";

import Counter from "@/components/elements/Counter";
import { useEffect, useState } from "react";

import {
  AppearingSoftly,
  RightToLeft,
} from "@/components/FramerTransition/Transition";

const Home: NextPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <RightToLeft>
        <div>
          <Counter />
          <ul>
            {users.map((user) => (
              <AppearingSoftly>
                <>
                  <li key={user.id}>
                    <p className="text-rose-300">name: {user.name}</p>
                    <p className="text-sky-300">email: {user.email}</p>
                    <p className="text-amber-300">
                      street: {user.address.street}
                    </p>
                  </li>
                  <li key={user.id}>
                    <p className="text-rose-300">name: {user.name}</p>
                    <p className="text-sky-300">email: {user.email}</p>
                    <p className="text-amber-300">
                      street: {user.address.street}
                    </p>
                  </li>
                  <br />
                </>
              </AppearingSoftly>
            ))}
          </ul>
        </div>
      </RightToLeft>
    </>
  );
};

export default Home;
