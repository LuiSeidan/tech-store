import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section>
      <div className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us" />
            <form
              action="https://formspree.io/luis.ignacio.seidan@gmail.com"
              method="POST"
              className="mt-5"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Jack Costou"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email@email.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="important!!!"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="Hello there buddy"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Send"
                  className="form-control bg-primary text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
