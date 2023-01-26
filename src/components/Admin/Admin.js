import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Admin.css";
import uuid4 from "uuid4";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Admin() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [List, setList] = useState([]);
    const [blogBody, setBlogBody] = useState("");

    function handleSave() {
        const newList = {
            title: title,
            author: author,
            img: img,
            id: uuid4(),
            blogBody: blogBody,
        };
        const newLists = [newList, ...List];
        setList(newLists);
        // console.log(text);
    }

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

    const style = {
        borderRadius: "2px",
        borderColor: "teal",
    };
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <InputGroup style={{ margin: "10px" }}>
                    <Form.Control
                        className="m-0"
                        as="textarea"
                        placeholder="Blog Body"
                        aria-label="With textarea"
                        style={style}
                        onChange={(e) => setBlogBody(e.target.value)}
                    />
                </InputGroup>
                <label>Blog Author:</label>
                <Form.Control
                    placeholder="Blog Author"
                    style={style}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Blog Image:</label>
                <Form.Control
                    placeholder="Blog Image Url"
                    style={style}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            <button onClick={() => handleSave()}>Add</button>

            {List.map((blog) => {
                return (
                    <Link
                        key={blog.id}
                        to="/blogs"
                        className="BlogList text-decoration-none"
                        as={Link}
                    >
                        <div className="blogItem">
                            <div className="blogItemLeft">
                                <h3
                                    className="blogItemTitle"
                                    style={{ color: "teal" }}
                                >
                                    {blog.title}
                                </h3>
                                <span style={{ color: "grey" }}>
                                    {blog.author}
                                </span>
                                <span style={{ color: "pink" }}>Date</span>
                            </div>
                            <div className="blogItemRight">
                                <img
                                    src={blog.img}
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
                );
            })}
        </>
    );
}
