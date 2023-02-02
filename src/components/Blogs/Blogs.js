import React, { useEffect, useState } from "react";
// import "../Admin/Admin.css";
import "./Blogs.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Blogs(blog, fetchData) {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [List, setList] = useState([]);

    return (
        <>
            {List.map((blog) => {
                return (
                    <>
                        <div>
                            <h1 className="m-5">This Is Blog Area</h1>
                        </div>
                        <div className="blogItemInfo">
                            <div className="blogItemLeft">
                                <h3 className="Title" style={{ color: "teal" }}>
                                    {blog.title}
                                </h3>
                                <p style={{ color: "grey" }}>Blog Author</p>
                            </div>
                            <div className="blogItemRight">
                                <img
                                    src="https://dummyimage.com/sqrpop"
                                    alt="dummy"
                                    // height="45px"
                                    // width="45px"
                                />
                            </div>
                        </div>
                        <span style={{ color: "pink" }}>Date</span>
                        <div className="tealLine">
                            <hr />
                        </div>
                        <br />
                        <div className="blogBody">
                            <p>{blog.blogBody}</p>
                        </div>
                        <button onClick={() => navigate(-1)}>Back</button>
                        <button>Delete</button>
                    </>
                );
            })}

            {/* <div>
                <h1 className="m-5">This Is Blog Area</h1>
            </div>
            <div className="blogItemInfo">
                <div className="blogItemLeft">
                    <h3 className="Title" style={{ color: "teal" }}>
                        {data.title}
                    </h3>
                    <p style={{ color: "grey" }}>Blog Author</p>
                </div>
                <div className="blogItemRight">
                    <img
                        src="https://dummyimage.com/sqrpop"
                        alt="dummy"
                        // height="45px"
                        // width="45px"
                    />
                </div>
            </div>
            <span style={{ color: "pink" }}>Date</span>
            <div className="tealLine">
                <hr />
            </div>
            <br />
            <div className="blogBody">
                <p>{blogBody}</p>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => onDelete(blog.id)}>Delete</button> */}
        </>
    );
}
