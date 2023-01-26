import React from "react";
// import "../Admin/Admin.css";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
export default function Blogs(blog) {
    let navigate = useNavigate();
    return (
        <>
            <div>
                <h1 className="m-5">This Is Blog Area</h1>
            </div>
            <div className="blogItemInfo">
                <div className="blogItemLeft">
                    <h3 className="Title" style={{ color: "teal" }}>
                        Blog
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
        </>
    );
}
