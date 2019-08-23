import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 py-5">
            <img
              src={aboutBcg}
              alt="about company"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About Us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              pariatur consectetur aliquam animi nesciunt dolores laboriosam
              incidunt? Accusantium, odit voluptatum?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              pariatur consectetur aliquam animi nesciunt dolores laboriosam
              incidunt? Accusantium, odit voluptatum?
            </p>
            <button className="main-link-about" style={{ marginTop: "2rem" }}>
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
