import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  //intercept the fetch from axios to the given api url
  //response with an object.
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Rajan" }, { name: "Samit" }, { name: "Vivek" }]
  });
});

afterEach(() => {
  //uninstall moxios
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  //Attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the 'fetchComments' button aand click it
  //find fetch-comments //simulate click event
  wrapped.find(".fetch-comments").simulate("click");

  //introduce a TINY little pause.
/*   setTimeout(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);

    //it is completed.
    done();
    wrapped.unmount();
  }, 100); */
  moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find("li").length).toEqual(3);
    
        //it is completed.
        done();
        wrapped.unmount();
    });
});
 