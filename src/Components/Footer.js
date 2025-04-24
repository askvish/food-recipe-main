import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <p className="text-center">
          Copyright &copy; 2021 |{" "}
          <a
            className="text-light"
            href="https://github.com/askvish"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
