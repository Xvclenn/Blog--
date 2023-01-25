import axios from "axios";
import { useEffect, useState } from "react";

export function Client() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/Admin/").then(function (res) {
            const { data, status } = res;
            if (status === 200) {
                setNames(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);
    return (
        <div>
            <h1>This Is Client Area</h1>
            {names.map((item) => (
                <div>
                    {item.name}
                    <br />
                    {item.age}
                    <br />
                    {item.address}
                    <br />
                </div>
            ))}
        </div>
    );
}
