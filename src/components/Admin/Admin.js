import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Admin.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Admin() {
    const style = {
        borderRadius: "2px",
        borderColor: "teal",
    };

    // ____________________________________
    // const [names, setNames] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:8000/Admin/").then(function (res) {
    //         const { data, status } = res;
    //         if (status === 200) {
    //             setNames(data);
    //         } else {
    //             alert(`Aldaa garlaa: ${status}`);
    //         }
    //     });
    // }, []);
    // ____________________________________

    return (
        <>
            <div>
                <h1 className="m-5">This Is Admin Area</h1>
            </div>
            <h3 className="createBlogTitle">Add New Blog</h3>
            <div className="createBlog">
                <label>Blog Title:</label>
                <Form.Control
                    placeholder="Blog Title"
                    type="text"
                    style={style}
                />
                <label>Blog Body:</label>
                <InputGroup style={{ margin: "10px" }}>
                    <Form.Control
                        className="m-0"
                        as="textarea"
                        placeholder="Blog Body"
                        aria-label="With textarea"
                        style={style}
                    />
                </InputGroup>
                <label>Blog Author:</label>
                <Form.Control placeholder="Blog Author" style={style} />
                <label>Blog Image:</label>
                <Form.Control placeholder="Blog Image Url" style={style} />
            </div>

            <Link
                to="/blogs"
                className="BlogList text-decoration-none"
                as={Link}
            >
                <div className="blogItem">
                    <div className="blogItemLeft">
                        <h3 className="blogItemTitle" style={{ color: "teal" }}>
                            Blog
                        </h3>
                        <span style={{ color: "grey" }}>Blog Author</span>
                        <span style={{ color: "pink" }}>Date</span>
                    </div>
                    <div className="blogItemRight">
                        <img
                            src="https://dummyimage.com/sqrpop"
                            alt="dummy"
                            height="45px"
                            width="45px"
                        />
                    </div>
                </div>

                {/* // ____________________________________ */}
                {/* {names.map((item) => (
                    <div>
                        {item.name}
                        <br />
                        {item.age}
                        <br />
                        {item.address}
                        <br />
                    </div>
                ))} */}
                {/* // ____________________________________ */}
            </Link>
        </>
    );
}
