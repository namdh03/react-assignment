import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Skeleton } from "@/components/Loading";

const CallAPI = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const data = await response.json();

            if (data) {
                setUsers(data);

                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Skeleton />
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? [...Array(10)].map((_, index) => (
                              <tr key={index}>
                                  {[...Array(3)].map((_, index) => (
                                      <td key={index}>
                                          <Skeleton height="24px" />
                                      </td>
                                  ))}
                              </tr>
                          ))
                        : users.map((user) => (
                              <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </>
    );
};

export default CallAPI;
