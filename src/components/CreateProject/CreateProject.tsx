import React from "react";

type Props = {};

const CreateProjectPage = (props: Props) => {
  return (
    <div>
      <div>Add Project</div>
      <div>Project Title</div>
      <div>Input</div>
      <div>Project Introduction</div>
      <div>Input 2</div>
      <div>-------------------------------</div>
      <div>Integrating Egg3 Slack bot</div>
      <div>
        You can generate images using the Midjourney model through the Slack Bot
      </div>
      <div>Button Connect</div>
      <div>Select Slack Channel*</div>
      <div>Select from a list of channels without Answer Bot set up</div>
      <div>Select Button</div>
      <div>-------------------------------</div>
      <div>Are you currently logged into your Midjourney account?</div>
      <div>
        <div>
          <div>1. Discord web login</div>
          <div>Click the button</div>
        </div>
        <div>
          <div>1. Get Token</div>
          <div>
            To access the Discord Midjourney service, logging in will
            automatically grant you a token
          </div>
        </div>
      </div>
      <div>
        <div>Cancel</div>
        <div>Confirm</div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
