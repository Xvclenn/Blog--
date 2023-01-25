import React from "react";
// import "../Admin/Admin.css";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
export default function Blogs() {
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
            <div class="tealLine">
                <hr />
            </div>
            <br />
            <div className="blogBody">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum. Why
                    do we use it? It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).
                </p>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}
