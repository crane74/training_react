import type { NextPage } from "next";
import { motion } from "framer-motion";
import Counter from "@/components/elements/Counter";
import { useEffect, useState } from "react";

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
      <motion.div
        style={{ backgroundColor: "green", width: "300px", height: "300px" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 50,
          bottom: 50,
        }}
      />

      <Counter />
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>
              <p className="text-rose-300">name: {user.name}</p>
              <p className="text-sky-300">email: {user.email}</p>
              <p className="text-amber-300">street: {user.address.street}</p>
            </li>
            <br />
          </>
        ))}
      </ul>
    </>
  );
};

export default Home;
